const btnArr = document.querySelectorAll('.favorite-icon');

//Добавляю для всех кнопок слушатель нажатия
let count = 0;
btnArr.forEach(element => {
    element.addEventListener('click', likeHeart);
    element.dataset.id = count++;
    element.dataset.isLiked = false;
});

function likeHeart() {
    if (this.classList.contains('filled')) {
        this.classList.remove('filled');
        this.innerHTML = '&#9825;';
    }
    else {
        this.classList.add('filled');
        this.innerHTML = '&#10084;';
    }
}