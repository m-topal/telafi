const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const dialog = document.querySelector("[data-search-dialog]");
const openButton = document.querySelector("[data-search-open]");

if (dialog && openButton) {
  openButton.addEventListener("click", () => dialog.showModal());
}
