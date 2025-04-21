let fortune1 = 'Your cat will look very cuddly today.';
let fortune2 = 'The weather will be nice tomorrow.';
let fortune3 = 'Be cautious of your new neighbours.';
let fortune4 = 'You will find a new hobby soon.';
let fortune5 = 'It would be wise to avoid the color red today.';

let randomNumber = Math.ceil(Math.random() * 5);
let selectedFortune =
  randomNumber == 1
    ? fortune1
    : randomNumber == 2
    ? fortune2
    : randomNumber == 3
    ? fortune3
    : randomNumber == 4
    ? fortune4
    : randomNumber == 5
    ? fortune5
    : '';
console.log(selectedFortune);