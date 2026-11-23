(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const furniture = [{
    id: 'forma',
    name: 'Ваза Forma',
    cat: 'Декор',
    price: 2490,
    img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800',
    tag: 'Новинка',
    alt:
      'Керамическая ваза Forma для оформления полки, консоли или журнального столика.'
  },
  {
    id: 'orbit',
    name: 'Лампа Orbit',
    cat: 'Освещение',
    aliases: 'лампа лампу светильник lamp lighting',
    price: 5990,
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
    tag: 'Хит',
    alt:
      'Настольный светильник Orbit с абажуром для дополнительного освещения комнаты.'
  },
  {
    id: 'soft',
    name: 'Плед Soft Day',
    cat: 'Текстиль',
    price: 3290,
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    tag: '',
    alt:
      'Гостиная с диваном и мягким текстилем в спокойной нейтральной гамме.'
  },
  {
    id: 'loop',
    name: 'Стул Loop',
    cat: 'Мебель',
    price: 8990,
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800',
    tag: '',
    alt: 'Стул Loop с лаконичным силуэтом для обеденной зоны или рабочего пространства.'
  },
  {
    id: 'daily',
    name: 'Чашка Daily',
    cat: 'Кухня',
    price: 890,
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558f3d1b0?w=800',
    tag: 'Новинка',
    alt: 'Чашка Daily для сервировки стола и повседневного использования.'
  },
  {
    id: 'wave',
    name: 'Зеркало Wave',
    cat: 'Декор',
    price: 4190,
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    tag: '',
    alt: 'Зеркало Wave в интерьере жилого пространства.'
  },
  {
    id: 'cloud',
    name: 'Подушка Cloud',
    cat: 'Текстиль',
    price: 1490,
    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800',
    tag: '',
    alt: 'Декоративная подушка Cloud для дивана или кресла.'
  },
  {
    id: 'line',
    name: 'Торшер Line',
    cat: 'Освещение',
    aliases: 'торшер лампа лампу светильник floor lamp lighting',
    price: 7490,
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
    tag: '',
    alt:
      'Напольный светильник с абажуром для дополнительного освещения комнаты.'
  },
  {
    id: 'sofa',
    name: 'Диван Forma',
    cat: 'Мебель',
    price: 68900,
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    tag: 'Бестселлер',
    alt: 'Диван Forma для обустройства гостиной и зоны отдыха.'
  },
  {
    id: 'table',
    name: 'Стол Nordic',
    cat: 'Мебель',
    price: 32900,
    img: 'https://images.unsplash.com/photo-1499938670504-4d7c7e4f4b3a?w=800',
    tag: 'Новинка',
    alt:
      'Стол Nordic для обеденной зоны или домашнего рабочего места.'
  },
  {
    id: 'shelf',
    name: 'Стеллаж Grid',
    cat: 'Мебель',
    price: 18900,
    img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
    tag: '',
    alt: 'Стеллаж Grid с полками для книг и предметов декора.'
  },
  {
    id: 'bed',
    name: 'Кровать Calm',
    cat: 'Мебель',
    price: 55900,
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
    tag: '',
    alt: 'Кровать Calm в интерьере спальной комнаты.'
  }];
  const money = n => n.toLocaleString('ru-RU') + ' ₽';
  const get = (k, fallback = []) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  let favorites = get('domaFavorites', []);
  const allFurniture = () => furniture;
  function card(item) {
    const base = item.img.split('?')[0];
    const responsive = [480, 800, 1200]
      .map(width => `${base}?auto=format&fit=crop&w=${width}&q=80 ${width}w`)
      .join(', ');
    const safeAlt = item.alt || `${item.name} — ${item.cat.toLowerCase()} из каталога DOMA`;

    return `
      <article
        class="product-card"
        data-category="${item.cat}"
        data-price="${item.price}"
        data-name="${item.name.toLowerCase()}"
        data-search="${(item.name + " " + item.cat + " " + (item.aliases || "")).toLowerCase()}"
        data-id="${item.id}"
      >
        <a
          class="product-image"
          href="product.html?item=${item.id}"
          aria-label="Подробнее: ${item.name}"
        >
          ${item.tag ? `<span class="tag">${item.tag}</span>` : ''}
          <img
            src="${item.img}"
            srcset="${responsive}"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            width="800"
            height="800"
            alt="${safeAlt}"
            loading="lazy"
            decoding="async"
          >
        </a>
        <div class="product-info">
          <span class="product-category">${item.cat}</span>
          <h3>${item.name}</h3>
          <div class="product-bottom">
            <span class="price">${money(item.price)}</span>
            <button
              class="add-btn"
              type="button"
              data-add="${item.id}"
              aria-label="Добавить ${item.name} в корзину"
            >
              +
            </button>
          </div>
        </div>
      </article>
    `;
  }
  // Merge catalogue data with the original cards instead of duplicating products.
  const grid = $('#catalogGrid');
  if (grid) furniture.forEach(item => {
    const exists = $(`[data-add="${item.id}"], [data-id="${item.id}"]`, grid);
    if (!exists) grid.insertAdjacentHTML('beforeend', card(item));
  });
  // Search is available from every page and opens a results view.
  const actions = $('.header-actions');
  if (actions && !$('#siteSearch')) {
    const form = document.createElement('form');
    form.className = 'site-search';
    form.id = 'siteSearch';
    form.setAttribute('role', 'search');
    form.setAttribute('aria-label', 'Поиск по сайту');
    form.innerHTML = '<input type="search" aria-label="Поиск по сайту" placeholder="Найти мебель…"><button aria-label="Искать" type="submit">⌕</button>';
    actions.prepend(form);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = $('input', form).value.trim();
      if (q) location.href = 'search.html?q=' + encodeURIComponent(q)
    });
  }
  // Favorite and account pages are grouped in the drawer menu, keeping the header clean.
  const updateFavCount = () => {
    const el = $('#favoriteCount');
    if (el) el.textContent = favorites.length
  };
  function favoriteButton(itemId) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'favorite-btn';
    b.dataset.favorite = itemId;
    const item = furniture.find(x => x.id === itemId);
    const selected = favorites.includes(itemId);
    b.setAttribute('aria-label', `${selected?'Удалить':'Добавить'} ${item?.name||'товар'} ${selected?'из':'в'} избранное`);
    b.setAttribute('aria-pressed', String(selected));
    b.textContent = selected ? '♥': '♡';
    if (selected) b.classList.add('active');
    return b;
  }
  function decorateCards() {
    $$('.product-card').forEach(c => {
      const id = c.dataset.id || c.querySelector('[data-add]')?.dataset.add;
      if (!id || $('.favorite-btn', c)) return;
      c.dataset.id = id;
      const image = $('.product-image', c);
      if (image) image.append(favoriteButton(id));
    });
    updateFavCount();
  }
  decorateCards();
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-favorite]');
    if (!b) return;
    const id = b.dataset.favorite;
    favorites = favorites.includes(id) ? favorites.filter(x => x !== id): [...favorites,
    id];
    set('domaFavorites', favorites);
    decorateCards();
    if (document.body.dataset.page === 'favorites') renderFavorites();
  });
  // Four primary links stay visible; secondary destinations live in the furniture drawer.
  const nav = $('#siteNav');
  if (nav) {
    const current = location.pathname.split('/').pop() || 'index.html';
    const primary = [['index.html',
    'Главная'],
    ['catalog.html',
    'Каталог'],
    ['about.html',
    'О DOMA'],
    ['contacts.html',
    'Контакты']];
    const secondary = [['delivery.html',
    'Доставка и оплата']];
    nav.innerHTML = '';
    primary.forEach(([href,
    label]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      if (current === href) a.setAttribute('aria-current', 'page');
      nav.append(a);
    });
    const wrap = document.createElement('div');
    wrap.className = 'nav-more';
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'nav-more-toggle';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = '<span class="drawer-mark" aria-hidden="true"></span><span>В ящике</span>';
    const menu = document.createElement('div');
    menu.className = 'nav-more-menu';
    menu.id = 'secondaryNavMenu';
    menu.setAttribute('role', 'group');
    menu.setAttribute('aria-label', 'Дополнительные разделы');
    trigger.setAttribute('aria-controls', menu.id);
    secondary.forEach(([href,
    label]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      menu.append(a)
    });
    wrap.append(trigger, menu);
    nav.append(wrap);

    // Mobile-only shortcuts: keep the header uncluttered while preserving access to key tools.
    const mobileTools = document.createElement('div');
    mobileTools.className = 'mobile-menu-tools';
    mobileTools.innerHTML = `
      <a href="order.html">Корзина</a>
      <a href="favorites.html">Избранное</a>
      <a href="delivery.html">Доставка и оплата</a>
      <button type="button" id="mobileThemeToggle">Сменить тему</button>
    `;
    nav.append(mobileTools);
    const mobileThemeToggle = $('#mobileThemeToggle');
    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', () => {
        const themeButton = $('#themeToggle');
        if (themeButton) themeButton.click();
      });
    }

    trigger.addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open))
    });
    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false')
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false')
      }
    });
  }
  // Dark mode: only color tokens and surfaces change; layout remains untouched.
  const theme = localStorage.getItem('domaTheme') || 'light';
  document.documentElement.dataset.theme = theme;
  if (actions && !$('#themeToggle')) {
    const t = document.createElement('button');
    t.id = 'themeToggle';
    t.className = 'icon-btn';
    t.type = 'button';
    t.title = 'Сменить тему';
    t.setAttribute('aria-label', 'Сменить тему');
    t.innerHTML = theme === 'dark' ? '☀': '☾';
    actions.insertBefore(t, actions.children[2] || null);
    t.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light': 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('domaTheme', next);
      t.textContent = next === 'dark' ? '☀': '☾';
      t.title = next === 'dark' ? 'Включить светлую тему': 'Включить тёмную тему';
      t.setAttribute('aria-label', t.title)
    });
  }
  // Header action order: search, theme, basket, account, menu.
  if (actions) {
    const themeButton = $('#themeToggle', actions);
    const basketButton = $('.basket-btn', actions);
    const accountButton = $('.account-btn', actions);
    const menuButton = $('#menuToggle', actions);
    [themeButton,
    basketButton,
    accountButton,
    menuButton].filter(Boolean).forEach(el => actions.append(el));
  }
  // Compact, accessible consultant widget with local topic-aware responses.
  if (!$('#domaChat')) {
    const chat = document.createElement('aside');
    chat.id = 'domaChat';
    chat.className = 'chat-widget';
    chat.innerHTML = `
      <button
        class="chat-launch"
        type="button"
        aria-label="Открыть чат-консультант"
        aria-controls="domaChatPanel"
        aria-expanded="false"
        title="Чат-консультант"
      >
        <span class="chat-launch-icon" aria-hidden="true">✳</span>
        <span class="chat-launch-text">Консультант</span>
      </button>

      <section
        class="chat-panel"
        id="domaChatPanel"
        role="dialog"
        aria-label="Чат-консультант"
        aria-modal="false"
        hidden
      >
        <div class="chat-head">
          <div>
            <strong>DOMA · консультант</strong>
            <small>Помощь с выбором и заказом</small>
          </div>
          <button class="chat-close" type="button" aria-label="Закрыть чат">×</button>
        </div>

        <div class="chat-messages" role="log" aria-label="Сообщения консультанта" aria-live="polite" aria-relevant="additions">
          <p class="bot-message">
            Здравствуйте! Я помогу с каталогом, выбором товара, доставкой и оформлением заказа.
            Что вас интересует?
          </p>
        </div>

        <form class="chat-form">
          <input
            type="text"
            aria-label="Сообщение консультанту"
            placeholder="Напишите вопрос…"
            autocomplete="off"
            required
          >
          <button type="submit" aria-label="Отправить сообщение">➤</button>
        </form>
      </section>
    `;
    document.body.append(chat);
    const panel = $('.chat-panel', chat),
    launch = $('.chat-launch', chat),
    messages = $('.chat-messages', chat),
    input = $('.chat-form input', chat);
    const addMessage = (text, kind) => {
      const node = document.createElement('p');
      node.className = kind + '-message';
      node.textContent = text;
      messages.append(node);
      messages.scrollTop = messages.scrollHeight
    };
    const reply = q => {
      const s = q.toLowerCase().replace(/ё/g, 'е');
      if (/достав|курьер|пункт выдачи|срок/.test(s)) return 'Доставляем по России курьером или в пункт выдачи. Для заказов от 5 000 ₽ указана бесплатная стандартная доставка. Подробности — в разделе «Доставка и оплата».';
      if (/оплат|карт|налич|перевод/.test(s)) return 'Условия оплаты можно уточнить при оформлении заказа. Если нужна помощь, напишите на hello@doma-shop.ru или позвоните 8 800 100-71-08.';
      if (/заказ|оформ|корзин/.test(s)) return 'Добавьте товары в корзину, откройте её и заполните форму ниже списка товаров. Там можно проверить состав заказа, количество и указать адрес доставки.';
      if (/каталог|товар|мебел|диван|кроват|стол|ламп|торшер|плед|декор/.test(s)) return 'Откройте «Каталог»: товары можно искать по названию, выбирать по категориям и цене, а понравившиеся — добавлять в избранное.';
      if (/контакт|адрес|где вы|телефон|почт|позвон/.test(s)) return 'Мы находимся по адресу: Москва, Тверская улица, 6с1. Телефон: 8 800 100-71-08. Почта: hello@doma-shop.ru.';
      if (/время|работа|открыт/.test(s)) return 'Время работы: ежедневно с 12:00 до 00:00.';
      if (/привет|здравств/.test(s)) return 'Здравствуйте! Подскажите, что хотите узнать: каталог, доставка, оплата, контакты или оформление заказа?';
      return 'Я могу подсказать по каталогу, товарам, доставке, оплате, контактам и оформлению заказа. Напишите, что именно вас интересует.';
    };
    const closeChat = () => {
      panel.hidden = true;
      launch.setAttribute('aria-expanded', 'false')
    };
    launch.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      launch.setAttribute('aria-expanded', String(!panel.hidden));
      if (!panel.hidden) input.focus()
    });
    $('.chat-close', chat).addEventListener('click', closeChat);
    $('.chat-form', chat).addEventListener('submit', e => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      addMessage(q, 'user');
      input.value = '';
      addMessage(reply(q), 'bot')
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !panel.hidden) closeChat()
    });
  }
  // Furniture-inspired lift-up button: chair-like glyph rises with the page.
  const top = $('#toTop');
  if (top) {
    top.innerHTML = '<span aria-hidden="true">↑</span>';
    top.title = 'Вернуться к началу';
    top.addEventListener('click', () => scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  }
  // A tiny furniture lift follows the scroll progress and carries the visitor home.
  const lift = $('#toTop');
  if (lift) {
    const paintLift = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? Math.min(1, scrollY / max): 0;
      lift.style.setProperty('--lift-progress', `${Math.round(progress*100)}%`);
      lift.classList.toggle('visible', scrollY > 350);
    };
    addEventListener('scroll', paintLift, {
      passive: true
    });
    paintLift();
    lift.addEventListener('click', () => {
      lift.classList.add('is-rising');
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => lift.classList.remove('is-rising'), 850)
    });
  }
  // Search and catalogue filtering use one complete product source.
  const normalize = value => value.toLocaleLowerCase('ru').replace(/ё/g, 'е').replace(/[^a-zа-я0-9\s-]/gi, ' ').replace(/\s+/g, ' ').trim();
  const stem = word => {
    if (word.length < 4) return word;
    return word.replace(/(ами|ями|ого|ему|ому|ыми|ими|ать|ять|ить|ией|иям|иях|ах|ях|ов|ев|ей|ам|ям|ом|ем|ой|ей|у|ю|а|я|ы|и|е)$/u, '');
  };
  const searchMatch = (item, query) => {
    const hay = normalize([item.name,
    item.cat,
    item.id,
    item.aliases || ''].join(' '));
    const words = normalize(query).split(' ').filter(Boolean).map(stem);
    const hayWords = hay.split(' ').map(stem);
    return words.every(q => hay.includes(q) || hayWords.some(w => w.startsWith(q) || q.startsWith(w)));
  };
  const catalogGrid = $('#catalogGrid');
  if (catalogGrid) {
    const count = $('#productCount'),
    empty = $('#emptyState'),
    sort = $('#sortSelect');
    const applyCatalogFilters = () => {
      const categories = $$('input[name="category"]:checked').map(x => x.value);
      const max = $('input[name="price"]:checked')?.value || 'all';
      const q = $('#catalogSearch')?.value || '';
      let visible = $$('.product-card', catalogGrid).filter(card => {
        const item = {
          name: card.dataset.name || card.querySelector('h3')?.textContent || '',
          cat: card.dataset.category || '',
          id: card.dataset.id || card.querySelector('[data-add]')?.dataset.add || '',
          aliases: card.dataset.search || ''
        };
        const price = Number(card.dataset.price || 0);
        return(!categories.length || categories.includes(item.cat)) && (max === 'all' || price <= Number(max)) && (!q || searchMatch(item, q));
      });
      const mode = sort?.value || 'default';
      if (mode === 'low') visible.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
      if (mode === 'high') visible.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
      if (mode === 'name') visible.sort((a, b) => (a.dataset.name || '').localeCompare(b.dataset.name || '', 'ru'));
      const all = $$('.product-card', catalogGrid);
      all.forEach(c => {
        c.hidden = !visible.includes(c)
      });
      visible.forEach(c => catalogGrid.append(c));
      if (count) count.textContent = `Найдено: ${visible.length}`;
      if (empty) empty.hidden = visible.length > 0;
    };
    // Ensure the base eight and dynamically added four cards share consistent metadata.
    $$('.product-card', catalogGrid).forEach(card => {
      const title = card.querySelector('h3')?.textContent.trim() || '';
      const category = $('.product-category', card)?.textContent.trim() || '';
      const addButton = $('[data-add]', card);
      if (!card.dataset.name) card.dataset.name = normalize(title);
      if (!card.dataset.category) card.dataset.category = category;
      if (!card.dataset.price) card.dataset.price = String(Number(($('.price', card)?.textContent || '').replace(/[^\d]/g, '')) || 0);
      if (!card.dataset.id) card.dataset.id = addButton?.dataset.add || '';
      if (!card.dataset.search) card.dataset.search = normalize(`${title} ${category}`);
    });
    $$('.filters input').forEach(el => el.addEventListener('change', applyCatalogFilters));
    sort?.addEventListener('change', applyCatalogFilters);
    $('#resetFilters')?.addEventListener('click', () => {
      $$('.filters input[name="category"]').forEach(x => x.checked = false);
      const any = $('input[name="price"][value="all"]');
      if (any) any.checked = true;
      if (sort) sort.value = 'default';
      const q = $('#catalogSearch');
      if (q) q.value = '';
      applyCatalogFilters();
    });
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      const box = $(`input[name="category"][value="${CSS.escape(category)}"]`);
      if (box) box.checked = true
    }
    const initialQ = params.get('q');
    if (initialQ) {
      const q = $('#catalogSearch');
      if (q) q.value = initialQ
    }
    applyCatalogFilters();
  }
  // Search results page renders from the full catalogue, not only the four added furniture items.
  if (document.body.dataset.page === 'search') {
    const q = new URLSearchParams(location.search).get('q') || '';
    const heading = $('#searchHeading'),
    result = $('#searchResults');
    if (heading) heading.textContent = q ? `Результаты поиска: «${q}»`: 'Поиск по каталогу';
    if (result) {
      const matches = furniture.filter(item => !q || searchMatch(item, q));
      result.innerHTML = matches.length ? matches.map(card).join(''): '<div class="empty-state">Ничего не найдено. Попробуйте «лампа», «диван» или «стол».</div>';
      decorateCards();
    }
  }
  function renderFavorites() {
    const host = $('#favoritesGrid');
    if (!host) return;
    const map = {
      ...Object.fromEntries(furniture.map(x => [x.id,
      x]))
    };
    const old = {
      forma: {
        name: 'Ваза Forma',
        cat: 'Декор',
        price: 2490,
        img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800'
      },
      orbit: {
        name: 'Лампа Orbit',
        cat: 'Освещение',
        price: 5990,
        img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'
      },
      soft: {
        name: 'Плед Soft Day',
        cat: 'Текстиль',
        price: 3290,
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
      },
      loop: {
        name: 'Стул Loop',
        cat: 'Мебель',
        price: 8990,
        img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800'
      },
      daily: {
        name: 'Чашка Daily',
        cat: 'Кухня',
        price: 890,
        img: 'https://images.unsplash.com/photo-1514228742587-6b1558f3d1b0?w=800'
      },
      wave: {
        name: 'Зеркало Wave',
        cat: 'Декор',
        price: 4190,
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'
      },
      cloud: {
        name: 'Подушка Cloud',
        cat: 'Текстиль',
        price: 1490,
        img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800'
      },
      line: {
        name: 'Торшер Line',
        cat: 'Освещение',
        price: 7490,
        img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'
      }
    };
    const all = {
      ...old,
      ...map
    };
    host.innerHTML = favorites.map(id => all[id]).filter(Boolean).map(x => card({
      id: Object.keys(all).find(k => all[k] === x),
      name: x.name,
      cat: x.cat,
      price: x.price,
      img: x.img,
      alt: x.alt
    })).join('') || '<div class="empty-state">Пока ничего нет. Нажмите ♡ на понравившемся товаре в каталоге.</div>';
    decorateCards();
  }
  if (document.body.dataset.page === 'favorites') renderFavorites();
  // Account form is a local demo; never claims server authentication.
  const login = $('#accountForm');
  if (login) login.addEventListener('submit', e => {
    e.preventDefault();
    if (!login.reportValidity()) return;
    $('#accountMessage').hidden = false;
    $('#accountMessage').textContent = 'Форма заполнена корректно. Для помощи с заказом свяжитесь с консультантом DOMA.';
  });
})();
