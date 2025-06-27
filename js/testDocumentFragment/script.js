
const myList = document.getElementById('container')
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const documentFragment = document.createDocumentFragment();

li1.textContent = 'Potato';
li2.textContent = 'Apple';
documentFragment.append(li1);
documentFragment.append(li2);

console.dir(documentFragment);

myList.appendChild(documentFragment);

console.dir(documentFragment);