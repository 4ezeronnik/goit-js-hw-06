const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create="Create"]')
const btnDestroyRef = document.querySelector('button[data-destroy="Destroy"]'); 
const divBoxesRef = document.querySelector('div#boxes');


inputRef.addEventListener('click', onInputClick);

function onInputClick() {
  
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {

}

function destroyBoxes() {

}
