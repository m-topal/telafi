document.querySelectorAll('.filter').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter=button.dataset.filter;
    document.querySelectorAll('.filter-item').forEach(item=>{
      const cat=(item.dataset.category||'').toLocaleLowerCase('tr-TR');
      item.classList.toggle('is-hidden', filter!=='all' && cat!==filter);
    });
  });
});