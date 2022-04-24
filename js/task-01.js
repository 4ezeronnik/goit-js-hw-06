const elementsOfList = document.querySelectorAll('li.item');
console.log('Number of categories:', elementsOfList.length);

console.log('');

const animalsOfList = document.querySelector('h2');
console.log('Category:', animalsOfList.textContent);

const amountOfAnimals = document.querySelector('li.item > ul');
const amountOfAnotherAnimals = amountOfAnimals.children;
console.log('Elements:', amountOfAnotherAnimals.length);

