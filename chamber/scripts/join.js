const timestamp = document.querySelector('#timestamp');
if (timestamp) {
  timestamp.value = new Date().toISOString();
}

const modalLinks = document.querySelectorAll('[data-modal]');
modalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modal = document.getElementById(link.dataset.modal);
    modal.showModal();
  });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});
