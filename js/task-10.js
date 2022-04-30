const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]')
const btnDestroyRef = document.querySelector('button[data-destroy]'); 
const divBoxesRef = document.querySelector('#boxes');


btnCreateRef.addEventListener('click', () => 
createBoxes(inputRef.value));


function createBoxes(amount) {
  let boxsize = 30;
  for (let i = 0; i <= amount; i ++) {
    const colorRandom = getRandomHexColor();
    const divCreate = document.createElement('div');
    divCreate.style.width = `${boxsize}px`;
    divCreate.style.height = `${boxsize}px`;
    divCreate.style.backgroundColor = colorRandom;
    divBoxesRef.append(divCreate);
    boxsize += 10;
  }
}
btnDestroyRef.addEventListener('click',destroyBoxes);
function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

   
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

                
