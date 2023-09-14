let password = document.forms["signup"]["pword"];
let confirmPassword = document.forms["signup"]["confirmpword"];
let passwordError = document.getElementById("pword-error-text");
console.log(password);
passwordError.textContent = "";

function validatePassword() {
    if (password.value != confirmPassword.value) {
        showPasswordError();
        return false;
    } else {
        return true;
    }
}

function showPasswordError() {
    passwordError.textContent = "*Passwords don't match"
    password.style.border = "solid 1px #ff0000";
    confirmPassword.style.border = "solid 1px #ff0000";
}
