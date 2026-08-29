function normalizeTR(value){
  return (value || '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i').replace(/ğ/g,'g').replace(/ü/g,'u')
    .replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c');
}

const params = new URLSearchParams(window.location.search);
const requested = normalizeTR(params.get('kategori'));

document.querySelectorAll('.filter').forEach(button => {
  const filterValue = normalizeTR(button.dataset.filter);
  if (requested && filterValue === requested){
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));
    button.classList.add('is-active');
  }

  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));
    button.classList.add('is-active');

    const filter = normalizeTR(button.dataset.filter);
    document.querySelectorAll('.filter-item').forEach(item => {
      const category = normalizeTR(item.dataset.category);
      item.classList.toggle('is-hidden', filter !== 'all' && category !== filter);
    });
  });
});

if (requested){
  document.querySelectorAll('.filter-item').forEach(item => {
    const category = normalizeTR(item.dataset.category);
    item.classList.toggle('is-hidden', category !== requested);
  });
}
