
const inputRef = document.querySelector("input");
const validateRef = document.querySelector('input#validation-input')
console.log(inputRef);


inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (validateRef.value === '6') {
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.add('invalid');
    }
}