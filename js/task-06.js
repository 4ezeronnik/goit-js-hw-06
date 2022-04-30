

const validateRef = document.querySelector('#validation-input');


validateRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (parseInt(validateRef.value.length) === parseInt(validateRef.dataset.length)) {
        validateRef.classList.add('valid');
        validateRef.classList.remove('invalid');
       
    }
    else {
        validateRef.classList.add('invalid');
        validateRef.classList.remove('valid');
    }
}