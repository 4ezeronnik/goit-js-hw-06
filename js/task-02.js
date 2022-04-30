const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const potatoesEl = document.createElement('li');
// potatoesEl.textContent = 'Potatoes';
// potatoesEl.classList.add('item');
// console.log(potatoesEl.textContent);

// const mushroomsEl = document.createElement('li');
// mushroomsEl.textContent = 'Mushrooms';
// mushroomsEl.classList.add('item');
// console.log(mushroomsEl.textContent);

// const garlicEl = document.createElement('li');
// garlicEl.textContent = 'Garlic';
// garlicEl.classList.add('item');
// console.log(garlicEl.textContent);

// const tomatosEl = document.createElement('li');
// tomatosEl.textContent = 'Tomatos';
// tomatosEl.classList.add('item');
// console.log(tomatosEl.textContent);

// const herbsEl = document.createElement('li');
// herbsEl.textContent = 'Herbs';
// herbsEl.classList.add('item');
// console.log(herbsEl.textContent);

// const condimentsEl = document.createElement('li');
// condimentsEl.textContent = 'Condiments';
// condimentsEl.classList.add('item');
// console.log(condimentsEl.textContent);

const listOfIngredients = document.querySelector('#ingredients');


// listOfIngredients.append(potatoesEl, mushroomsEl, garlicEl, tomatosEl, herbsEl, condimentsEl);
// console.log(listOfIngredients);



ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  listOfIngredients.append(itemEl);
  });


console.log(listOfIngredients);
