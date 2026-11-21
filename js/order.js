(() => {
  const catalog = {
    forma:{name:'Ваза Forma',price:2490,image:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400'},
    orbit:{name:'Лампа Orbit',price:5990,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400'},
    soft:{name:'Плед Soft Day',price:3290,image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400'},
    loop:{name:'Стул Loop',price:8990,image:'https://images.unsplash.com/photo-1503602642458-232111445657?w=400'},
    daily:{name:'Чашка Daily',price:890,image:'https://images.unsplash.com/photo-1514228742587-6b1558f3d1b0?w=400'},
    wave:{name:'Зеркало Wave',price:4190,image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400'},
    cloud:{name:'Подушка Cloud',price:1490,image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400'},
    line:{name:'Торшер Line',price:7490,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400'},
    sofa:{name:'Диван Forma',price:68900,image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400'},
    table:{name:'Стол Nordic',price:32900,image:'https://images.unsplash.com/photo-1499938670504-4d7c7e4f4b3a?w=400'},
    shelf:{name:'Стеллаж Grid',price:18900,image:'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400'},
    bed:{name:'Кровать Calm',price:55900,image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400'}
  };
  const list=document.getElementById('orderItems');
  if(!list)return;
  const total=document.getElementById('orderTotal');
  const empty=document.getElementById('orderEmptyNote');
  const money=n=>n.toLocaleString('ru-RU')+' ₽';
  const read=()=>{try{return JSON.parse(localStorage.getItem('domaCart')||'{}')}catch{return {}}};
  const save=cart=>{localStorage.setItem('domaCart',JSON.stringify(cart));const badge=document.getElementById('cartCount');if(badge)badge.textContent=Object.values(cart).reduce((a,b)=>a+Number(b||0),0)};
  const render=()=>{
    const cart=read();list.innerHTML='';let sum=0;let count=0;
    Object.entries(cart).forEach(([id,qty])=>{
      const item=catalog[id],n=Math.max(0,Number(qty)||0);if(!item||!n)return;
      count+=n;sum+=item.price*n;
      const row=document.createElement('article');row.className='order-item';row.dataset.id=id;
      row.innerHTML=`<img src="${item.image}" alt=""><div class="order-item-info"><strong>${item.name}</strong><span>${money(item.price)} за шт.</span><div class="order-item-controls"><button type="button" data-cart-action="minus" aria-label="Уменьшить количество">−</button><b>${n}</b><button type="button" data-cart-action="plus" aria-label="Увеличить количество">+</button><button type="button" data-cart-action="remove" class="order-remove">Удалить</button></div></div><strong class="order-item-subtotal">${money(item.price*n)}</strong>`;
      list.append(row);
    });
    total.textContent=money(sum);empty.hidden=count>0;
    if(!count)list.innerHTML='<div class="order-empty-state"><span>♡</span><strong>Здесь появятся выбранные товары</strong><a href="catalog.html">Перейти в каталог ↗</a></div>';
  };
  list.addEventListener('click',e=>{
    const btn=e.target.closest('[data-cart-action]');if(!btn)return;
    const row=btn.closest('.order-item');if(!row)return;
    const cart=read(),id=row.dataset.id,action=btn.dataset.cartAction;
    if(action==='remove'||action==='minus'&&Number(cart[id])<=1)delete cart[id];
    else if(action==='minus')cart[id]=Number(cart[id])-1;
    else if(action==='plus')cart[id]=Number(cart[id])+1;
    save(cart);render();
  });
  render();
})();
