const products = {
  forma:{name:'Ваза Forma',category:'Декор',price:2490,image:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1000'},
  orbit:{name:'Лампа Orbit',category:'Освещение',price:5990,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000'},
  soft:{name:'Плед Soft Day',category:'Текстиль',price:3290,image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000'},
  loop:{name:'Стул Loop',category:'Мебель',price:8990,image:'https://images.unsplash.com/photo-1503602642458-232111445657?w=1000'},
  daily:{name:'Чашка Daily',category:'Кухня',price:890,image:'https://images.unsplash.com/photo-1514228742587-6b1558f3d1b0?w=1000'},
  wave:{name:'Зеркало Wave',category:'Декор',price:4190,image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000'},
  cloud:{name:'Подушка Cloud',category:'Текстиль',price:1490,image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1000'},
  line:{name:'Торшер Line',category:'Освещение',price:7490,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1000'},
  sofa:{name:'Диван Forma',category:'Мебель',price:68900,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000'},
  table:{name:'Стол Nordic',category:'Мебель',price:32900,image:'https://images.unsplash.com/photo-1499938670504-4d7c7e4f4b3a?w=1000'},
  shelf:{name:'Стеллаж Grid',category:'Мебель',price:18900,image:'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1000'},
  bed:{name:'Кровать Calm',category:'Мебель',price:55900,image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000'}
};
const readCart=()=>{try{return JSON.parse(localStorage.getItem('domaCart')||'{}')}catch{return {}}};
let cart=readCart();
function saveCart(){localStorage.setItem('domaCart',JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const el=document.getElementById('cartCount');if(el)el.textContent=Object.values(cart).reduce((a,b)=>a+b,0)}
function addToCart(id){if(!products[id])return;cart[id]=(cart[id]||0)+1;saveCart();const b=document.querySelector(`[data-add="${id}"]`);if(b){const old=b.textContent;b.textContent='✓';setTimeout(()=>b.textContent=old,800)}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b)addToCart(b.dataset.add)});
updateCartCount();
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('siteNav');
if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню')});
const detailName=document.getElementById('detailName');
if(detailName){const id=new URLSearchParams(location.search).get('item')||'forma',p=products[id]||products.forma;detailName.textContent=p.name;document.getElementById('crumbName').textContent=p.name;document.getElementById('detailCategory').textContent=p.category.toUpperCase();document.getElementById('detailPrice').textContent=p.price.toLocaleString('ru-RU')+' ₽';const img=document.getElementById('detailImage');img.src=p.image;img.alt=p.name;document.getElementById('detailAdd').dataset.add=id}
const form=document.getElementById('orderForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;document.getElementById('formMessage').hidden=false;document.getElementById('formMessage').textContent='Спасибо! Форма успешно проверена. Заказ принят! Мы свяжемся с вами для подтверждения.';form.reset()});
const topBtn=document.getElementById('toTop');if(topBtn){const update=()=>topBtn.classList.toggle('visible',scrollY>350);addEventListener('scroll',update,{passive:true});update();topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))}
