function validatePassword() {

    let password = document.getElementById("password");
    let password_error = document.getElementById('password-error');

    if (password.value.trim() == '') {
        password_error.innerHTML = "Password Required!"
        password.style.border = "2px solid red"
        return false;
    } else {
        password_error.innerHTML = "<span>Valid!</span>"
        password.style.border = "2px solid green"
        return true;
    }
}

function validateEmail() {

    let email = document.getElementById("email");
    let email_error = document.getElementById('email-error');
    const regExEmail = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!email.value.match(regExEmail)) {
        email_error.innerHTML = "Valid Email Required!"
        email.style.border = "2px solid red"
        return false;
    } else if (email.value.trim() == '') {
        email_error.innerHTML = "Email Required!"
        email.style.border = "2px solid red"
        return false;
    } else {
        email_error.innerHTML = "<span>Valid!</span>"
        email.style.border = "2px solid green"
        return true;
    }
}

function validateForm() {
    if (validatePassword() && validateEmail()) {
        return true;
    } else {
        return false;
    }
}