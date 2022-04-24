const elementsOfList = document.querySelectorAll('li.item');
console.log('Number of categories:', elementsOfList.length);

console.log('');

const animalsOfList = document.querySelector('h2');
console.log('Category:', animalsOfList.textContent);

const amountOfAnimals = document.querySelector('li.item > ul');
const amountOfAnotherAnimals = amountOfAnimals.children;
console.log('Elements:', amountOfAnotherAnimals.length);

console.log('');

const productsOfList = document.querySelectorAll('h2');
console.log('Category:', productsOfList[1].textContent);

const amountOfProducts = document.querySelectorAll('li.item > ul');
const amountOfAnotherProducts = amountOfProducts[1];

const amountOfFinalProducts = amountOfAnotherProducts.children;
console.log('Elements:', amountOfFinalProducts.length);

console.log('');

const technologiesOfList = document.querySelectorAll('h2');
console.log('Category:', technologiesOfList[2].textContent);

const amountOfTechnologies = document.querySelectorAll('li.item > ul');
const amountOfAnotherTechnologies = amountOfTechnologies[2];

const amountOfFinalTechnologies = amountOfAnotherTechnologies.children;
console.log('Elements:', amountOfFinalTechnologies.length);











