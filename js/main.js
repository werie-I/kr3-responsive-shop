
const modal = document.querySelector('#orderModal');
const orderForm = document.querySelector('#orderForm');
const productInput = document.querySelector('#productInput');

const orderButtons = document.querySelectorAll('.product-card__button');
const closeButtons = document.querySelectorAll('[data-modal-close]');

const nameInput = document.querySelector('#nameInput');
const phoneInput = document.querySelector('#phoneInput');
const emailInput = document.querySelector('#emailInput');

const nameError = document.querySelector('#nameError');
const phoneError = document.querySelector('#phoneError');
const emailError = document.querySelector('#emailError');

// Модальное окно
if (modal && orderForm && productInput) {
    let previousFocus = null;
    let previousBodyOverflow = '';

    const modalContent = modal.querySelector('.modal__content');

    function openModal(button) {
        previousFocus = button;
        previousBodyOverflow = document.body.style.overflow;

        const productName = button.dataset.product;

        if (productName) {
            productInput.value = productName;

            const topicInput = document.querySelector('#topicInput');

            if (topicInput) {
                topicInput.value = productName;
            }
        }

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (nameInput) {
            nameInput.focus();
        } else if (modalContent) {
            modalContent.setAttribute('tabindex', '-1');
            modalContent.focus();
        }
    }

    function closeModal() {
        if (!modal.classList.contains('is-open')) {
            return;
        }

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = previousBodyOverflow;

        if (previousFocus && document.contains(previousFocus)) {
            previousFocus.focus();
        }
    }

    // Открытие окна кнопками заказа
    orderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            openModal(button);
        });
    });

    // Закрытие крестиком и кликом по затемнённому фону
    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    // Escape и управление фокусом с клавиатуры
    document.addEventListener('keydown', (event) => {
        if (!modal.classList.contains('is-open')) {
            return;
        }

        if (event.key === 'Escape') {
            closeModal();
            return;
        }

        if (event.key === 'Tab') {
            const focusableElements = modal.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), ' +
                'select:not([disabled]), textarea:not([disabled]), ' +
                '[tabindex]:not([tabindex="-1"])'
            );

            const visibleElements = Array.from(focusableElements).filter(
                (element) => element.getClientRects().length > 0
            );

            if (visibleElements.length === 0) {
                event.preventDefault();
                return;
            }

            const firstElement = visibleElements[0];
            const lastElement = visibleElements[visibleElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });

    // Проверка формы
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (nameError) nameError.textContent = '';
        if (phoneError) phoneError.textContent = '';
        if (emailError) emailError.textContent = '';

        let isValid = true;

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        if (name.length < 2) {
            if (nameError) {
                nameError.textContent =
                    'Введите имя не короче 2 символов.';
            }
            isValid = false;
        }

        const phoneDigits = phone.replace(/\D/g, '');

        if (phoneDigits.length < 10) {
            if (phoneError) {
                phoneError.textContent =
                    'Введите корректный номер телефона.';
            }
            isValid = false;
        }

        if (!email.includes('@') || !email.includes('.')) {
            if (emailError) {
                emailError.textContent = 'Введите корректный email.';
            }
            isValid = false;
        }

        if (!isValid) {
            if (nameError && name.length < 2 && nameInput) {
                nameInput.focus();
            } else if (
                phoneError &&
                phone.replace(/\D/g, '').length < 10 &&
                phoneInput
            ) {
                phoneInput.focus();
            } else if (emailInput) {
                emailInput.focus();
            }

            return;
        }

        alert('Заявка успешно отправлена!');

        orderForm.reset();
        closeModal();
    });
}

// Кнопка «Наверх»
const scrollTopButton = document.querySelector('#scrollTopButton');

if (scrollTopButton) {
    function updateScrollTopButton() {
        scrollTopButton.classList.toggle(
            'is-visible',
            window.scrollY > 300
        );
    }

    window.addEventListener('scroll', updateScrollTopButton, {
        passive: true
    });

    updateScrollTopButton();

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
