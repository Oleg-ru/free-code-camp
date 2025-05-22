const inputTextElement = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const resultDiv = document.querySelector('#result');

function init() {
  checkButton.addEventListener('click', () => {
    const inputText = inputTextElement.value.trim();
    if (inputText === '') {
      window.alert('Please input a value');
      return;
    }
    const isPalindrome = checkPalindrome(inputText);
    if (isPalindrome) {
      resultDiv.textContent = String.raw`${inputTextElement.value} is a palindrome`;
    } else {
      resultDiv.textContent = String.raw`${inputTextElement.value} is not a palindrome`;
    }
  });
}

/**
 *
 * @param {string} text
 * @returns {boolean} Палиндром ли это
 */
function checkPalindrome(text) {
  const textWithout = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseText = textWithout.split('').reverse().join('');
  return textWithout === reverseText;
}

//Запускаем приложение
init();
