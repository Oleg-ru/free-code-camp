const textInput = document.querySelector('#text-input');
const count = document.querySelector('#count');
const charCount = document.querySelector('#char-count');

textInput.addEventListener('input', (event) => {
  if (event.target.value.length >= 50) {
    textInput.value = textInput.value.slice(0, 50);
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
  count.textContent = event.target.value.length;
});
