
const inputRef = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');



inputRef.addEventListener('input', onInput);

function onInput() {
    textOutput.style.fontSize = inputRef.value + "px";
}
