const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Please, fill in all the fields');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}