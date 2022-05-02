const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients')

const elements = ingredients.map(ingregient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingregient;
  itemEl.classList.add('item');
  return itemEl;
});

allIngredients.append(...elements)

console.log(allIngredients);



