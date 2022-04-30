const buttonRef = document.querySelector('button.change-color');
const colorOutputRef = document.querySelector('span.color');

buttonRef.addEventListener('click', onButtonClick);


function onButtonClick() {
  document.body.style.background = getRandomHexColor();
  colorOutputRef.textContent = document.body.style.background;
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
