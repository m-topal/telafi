function norm(value){
  return (value || '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i').replace(/ğ/g,'g').replace(/ü/g,'u')
    .replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c');
}

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const target = norm(btn.dataset.filter);

    document.querySelectorAll('.filter-item').forEach(item=>{
      const cat = norm(item.dataset.category);
      item.classList.toggle('is-hidden', target !== 'all' && cat !== target);
    });
  });
});
