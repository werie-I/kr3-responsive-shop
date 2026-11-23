const products = {
  forma: {
    name: 'Ваза Forma',
    category: 'Декор',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1000',
    imageAlt:
      'Керамическая ваза Forma для оформления полки, консоли или журнального столика.'
  },
  orbit: {
    name: 'Лампа Orbit',
    category: 'Освещение',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000',
    imageAlt:
      'Настольный светильник Orbit с абажуром для дополнительного освещения комнаты.'
  },
  soft: {
    name: 'Плед Soft Day',
    category: 'Текстиль',
    price: 3290,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
    imageAlt:
      'Гостиная с диваном и мягким текстилем в спокойной нейтральной гамме.'
  },
  loop: {
    name: 'Стул Loop',
    category: 'Мебель',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1000',
    imageAlt:
      'Стул Loop с лаконичным силуэтом для обеденной зоны или рабочего пространства.'
  },
  daily: {
    name: 'Чашка Daily',
    category: 'Кухня',
    price: 890,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558f3d1b0?w=1000',
    imageAlt:
      'Чашка Daily для сервировки стола и повседневного использования.'
  },
  wave: {
    name: 'Зеркало Wave',
    category: 'Декор',
    price: 4190,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000',
    imageAlt: 'Зеркало Wave в интерьере жилого пространства.'
  },
  cloud: {
    name: 'Подушка Cloud',
    category: 'Текстиль',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1000',
    imageAlt: 'Декоративная подушка Cloud для дивана или кресла.'
  },
  line: {
    name: 'Торшер Line',
    category: 'Освещение',
    price: 7490,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000',
    imageAlt:
      'Напольный светильник с абажуром для дополнительного освещения комнаты.'
  },
  sofa: {
    name: 'Диван Forma',
    category: 'Мебель',
    price: 68900,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000',
    imageAlt:
      'Диван Forma для обустройства гостиной и зоны отдыха.'
  },
  table: {
    name: 'Стол Nordic',
    category: 'Мебель',
    price: 32900,
    image: 'https://images.unsplash.com/photo-1499938670504-4d7c7e4f4b3a?w=1000',
    imageAlt:
      'Стол Nordic для обеденной зоны или домашнего рабочего места.'
  },
  shelf: {
    name: 'Стеллаж Grid',
    category: 'Мебель',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1000',
    imageAlt: 'Стеллаж Grid с полками для книг и предметов декора.'
  },
  bed: {
    name: 'Кровать Calm',
    category: 'Мебель',
    price: 55900,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000',
    imageAlt: 'Кровать Calm в интерьере спальной комнаты.'
  }
};
const productDetails = {
  "forma": {
    "description": "Декоративная ваза Forma для оформления полки, консоли или журнального столика. Лаконичный предмет для интерьерной композиции.",
    "advantages": [
      "Подходит для полки, консоли и журнального столика",
      "Можно использовать как самостоятельный акцент или часть композиции",
      "Сочетается с разными предметами декора"
    ]
  },
  "orbit": {
    "description": "Настольный светильник Orbit для дополнительного освещения и создания уютной атмосферы в жилом пространстве.",
    "advantages": [
      "Подходит для дополнительного освещения комнаты",
      "Помогает создать уютную атмосферу",
      "Лаконичный акцент для современного интерьера"
    ]
  },
  "soft": {
    "description": "Плед Soft Day — текстильный аксессуар для дивана, кресла или зоны отдыха. Подходит для оформления гостиной и спальни.",
    "advantages": [
      "Дополняет интерьер гостиной или спальни",
      "Подходит для дивана и кресла",
      "Добавляет мягкий текстильный акцент"
    ]
  },
  "loop": {
    "description": "Стул Loop для обеденной зоны или домашнего рабочего пространства. Лаконичный предмет мебели для повседневного использования.",
    "advantages": [
      "Подходит для обеденной зоны",
      "Можно использовать в домашнем рабочем пространстве",
      "Лаконичный дизайн для разных интерьеров"
    ]
  },
  "daily": {
    "description": "Чашка Daily для сервировки стола и повседневного использования дома.",
    "advantages": [
      "Подходит для ежедневной сервировки",
      "Дополняет кухонную посуду",
      "Лаконичный предмет для домашнего использования"
    ]
  },
  "wave": {
    "description": "Зеркало Wave — настенный предмет декора для оформления жилого пространства.",
    "advantages": [
      "Подходит для оформления стены",
      "Может стать акцентом интерьерной композиции",
      "Сочетается с другими предметами декора"
    ]
  },
  "cloud": {
    "description": "Декоративная подушка Cloud для дивана или кресла. Текстильный акцент помогает дополнить оформление зоны отдыха.",
    "advantages": [
      "Подходит для дивана и кресла",
      "Дополняет оформление зоны отдыха",
      "Помогает добавить интерьеру текстурный акцент"
    ]
  },
  "line": {
    "description": "Напольный светильник Line для дополнительного освещения комнаты и оформления жилого пространства.",
    "advantages": [
      "Подходит для дополнительного освещения",
      "Можно разместить в гостиной или спальне",
      "Сочетается с интерьером зоны отдыха"
    ]
  },
  "sofa": {
    "description": "Диван Forma — предмет мягкой мебели для обустройства гостиной и организации зоны отдыха.",
    "advantages": [
      "Подходит для гостиной и зоны отдыха",
      "Становится центральным предметом обстановки",
      "Можно дополнить текстилем и предметами декора"
    ]
  },
  "table": {
    "description": "Стол Nordic для обеденной зоны или домашнего рабочего пространства.",
    "advantages": [
      "Подходит для обеденной зоны",
      "Можно использовать как рабочую поверхность",
      "Лаконичный предмет мебели для дома"
    ]
  },
  "shelf": {
    "description": "Стеллаж Grid — система хранения для размещения книг, аксессуаров и предметов декора.",
    "advantages": [
      "Подходит для хранения книг",
      "Можно разместить предметы декора",
      "Помогает организовать пространство"
    ]
  },
  "bed": {
    "description": "Кровать Calm для обустройства спальной комнаты и организации места для отдыха.",
    "advantages": [
      "Подходит для спальной комнаты",
      "Помогает организовать зону отдыха",
      "Лаконичная основа для оформления спальни"
    ]
  }
};
const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem('domaCart') || '{}')
  } catch {
    return {
    }
  }
};
let cart = readCart();
function saveCart() {
  localStorage.setItem('domaCart', JSON.stringify(cart));
  updateCartCount()
}
function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = Object.values(cart).reduce((a, b) => a + b, 0)
}
function addToCart(id) {
  if (!products[id]) return;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  const b = document.querySelector(`[data-add="${id}"]`);
  if (b) {
    const old = b.textContent;
    b.textContent = '✓';
    setTimeout(() => b.textContent = old, 800)
  }
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-add]');
  if (b) addToCart(b.dataset.add)
});
updateCartCount();
const toggle = document.getElementById('menuToggle'), nav = document.getElementById('siteNav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Закрыть меню': 'Открыть меню')
});
const detailName = document.getElementById('detailName');
if (detailName) {
  const id = new URLSearchParams(location.search).get('item') || 'forma',
  p = products[id] || products.forma;
  detailName.textContent = p.name;
  document.getElementById('crumbName').textContent = p.name;
  document.getElementById('detailCategory').textContent = p.category.toUpperCase();
  document.getElementById('detailPrice').textContent = p.price.toLocaleString('ru-RU') + ' ₽';
  const img = document.getElementById('detailImage');
  img.src = p.image;
  img.alt = p.imageAlt || `${p.name} — ${p.category.toLowerCase()} из каталога DOMA`;
  const base = p.image.split('?')[0];
  img.srcset = [480,
  800,
  1200].map(w => `${base}?auto=format&fit=crop&w=${w}&q=80 ${w}w`).join(', ');
  img.sizes = '(max-width: 700px) 100vw, 50vw';
  const productInfo = productDetails[id] || productDetails.forma;
  const detailDescription = document.getElementById('detailDescription');
  if (detailDescription) detailDescription.textContent = productInfo.description;
  const detailAdvantages = document.getElementById('detailAdvantages');
  if (detailAdvantages) {
    detailAdvantages.replaceChildren();
    productInfo.advantages.forEach(advantage => {
      const item = document.createElement('li');
      item.textContent = advantage;
      detailAdvantages.appendChild(item);
    });
  }
  document.getElementById('detailAdd').dataset.add = id;
  const title = `${p.name} — ${p.category.toLowerCase()} для дома | DOMA`;
  const description = `${productInfo.description} Стоимость — ${p.price.toLocaleString('ru-RU')} ₽. Каталог DOMA.`;
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = title;
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = description;
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.content = p.image;
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.content = title;
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.content = description;
  const factName = document.getElementById('productFactName');
  if (factName) factName.textContent = p.name;
  const factCategory = document.getElementById('productFactCategory');
  if (factCategory) factCategory.textContent = p.category;
  const factPrice = document.getElementById('productFactPrice');
  if (factPrice) factPrice.textContent = p.price.toLocaleString('ru-RU') + ' ₽';
  const jsonLd = document.getElementById('productJsonLd');
  if (jsonLd) {
    const productStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      category: p.category,
      description: description,
      image: [p.image],
      offers: {
        '@type': 'Offer',
        price: String(p.price),
        priceCurrency: 'RUB',
        url: window.location.href
      }
    };
    jsonLd.textContent = JSON.stringify(productStructuredData, null, 2);
  }
}
const form = document.getElementById('orderForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  document.getElementById('formMessage').hidden = false;
  document.getElementById('formMessage').textContent = 'Спасибо! Форма успешно проверена. Заказ принят! Мы свяжемся с вами для подтверждения.';
  form.reset()
});
const topBtn = document.getElementById('toTop');
if (topBtn) {
  const update = () => topBtn.classList.toggle('visible', scrollY > 350);
  addEventListener('scroll', update, {
    passive: true
  });
  update();
  topBtn.addEventListener('click', () => scrollTo({
    top: 0,
    behavior: 'smooth'
  }))
}
