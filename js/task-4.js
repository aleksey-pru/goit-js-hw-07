const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password,
    }

    console.log(formData);

    loginForm.reset();
}