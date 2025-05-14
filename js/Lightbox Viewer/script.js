const pictureArr = document.querySelectorAll('.gallery-item');
const modalWindow = document.querySelector('.lightbox');
const closeModalWindowBtn = document.querySelector('#close-btn');
const fullPicture = document.querySelector('#lightbox-image');

pictureArr.forEach((picture) => {
  picture.addEventListener('click', openModalWindow);
});

closeModalWindowBtn.addEventListener('click', closeModalWindow);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalWindow.style.display = 'none';
  }
});

modalWindow.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    modalWindow.style.display = 'none';
  }
});

function openModalWindow(event) {
  fullPicture.src = event.target.src.replace('-thumbnail', '');
  modalWindow.style.display = 'flex';
}

function closeModalWindow() {
  modalWindow.style.display = 'none';
}
