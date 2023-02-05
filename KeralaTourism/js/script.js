
function validateName() {

    let username = document.getElementById("name");
    let name_error = document.getElementById('name-error');

    if (username.value.trim() == '') {
        name_error.innerHTML = "Username cannot be blank"
        username.style.border = "2px solid red"
        return false

    } else if (username.value.length < 3) {
        name_error.innerHTML = "Username should not be less than 3 characters"
        username.style.border = "2px solid red"
        return false

    } else if (username.value.length > 20) {
        name_error.innerHTML = "Username should not be more than 20 characters"
        username.style.border = "2px solid red"
        return false

    } else {
        name_error.innerHTML = "<span>Valid!</span>"
        username.style.border = "2px solid green"
        return true
    }
}

function validatePassword() {

    let password = document.getElementById("password");
    let password_error = document.getElementById('password-error');
    const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if (password.value.trim() == '') {
        password_error.innerHTML = "Password cannot be blank"
        password.style.border = "2px solid red"
        return false

    } else if (!password.value.match(regexPwd)) {
        password_error.innerHTML = "Password must contain 8 characters atleast 1 uppercase & lowercase letters and 1 number"
        password.style.border = "2px solid red"
        return false

    } else {
        password_error.innerHTML = "<span>Valid!</span>"
        password.style.border = "2px solid green"
        return true
    }
}

function validateEmail() {

    let email = document.getElementById("email");
    let email_error = document.getElementById('email-error');
    const regexEmail = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!email.value.match(regexEmail)) {
        email_error.innerHTML = "Not Valid!"
        email.style.border = "2px solid red"
        return false;
    } else if (email.value.trim() == '') {
        email_error.innerHTML = "Email Required"
        email.style.border = "2px solid red"
        return false;
    } else {
        email_error.innerHTML = "<span>Valid!</span>"
        email.style.border = "2px solid green"
        return true;
    }
}

function validatePhone() {

    let phone = document.getElementById("phone");
    let phone_error = document.getElementById('phone-error');
    const regExp = /^[6-9]\d{2}[-.\s]?\d{3}[-.\s]?\d{4}$/

    if (!phone.value.match(regExp)) {
        phone_error.innerHTML = "Not Valid!";
        phone.style.border = "2px solid red"
        return false;
    } else {
        phone_error.innerHTML = "<span>Valid!</span>";
        phone.style.border = "2px solid green"
        return true;
    }
}


function validateForm() {
    if (validateName() && validatePassword() && validateEmail() && validatePhone()) {
        return true;
    } else {
        return false;
    }
}

