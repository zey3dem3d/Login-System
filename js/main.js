// -------------------------------------------------- Variables --------------------------------------------------

var namee = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("form");
var nameErrorMsg = document.getElementById("nameErrorMessage");
var emailErrorMsg = document.getElementById("emailErrorMessage");
var passwordErrorMsg = document.getElementById("passwordErrorMessage");

// -------------------------------------------------- Validation --------------------------------------------------

var nameRegex = /[a-z]{3,}/;
var emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

namee.addEventListener("input", function () {
  if (nameRegex.test(namee.value)) {
    namee.style.boxShadow = "rgba(0, 255, 123, 0.25) 0px 0px 0px 0.25rem";
    namee.style.borderColor = "rgb(0, 255, 123)";
    nameErrorMsg.innerHTML = "";
  } else {
    namee.style.boxShadow = "0 0 0 .25rem rgb(253 13 162 / 25%)";
    namee.style.borderColor = "rgb(227 138 147)";
    nameErrorMsg.innerHTML = "Please, enter valid name";
  }
});

email.addEventListener("input", function () {
  if (emailRegex.test(email.value)) {
    email.style.boxShadow = "rgba(0, 255, 123, 0.25) 0px 0px 0px 0.25rem";
    email.style.borderColor = "rgb(0, 255, 123)";
    emailErrorMsg.innerHTML = "";
  } else {
    email.style.boxShadow = "0 0 0 .25rem rgb(253 13 162 / 25%)";
    email.style.borderColor = "rgb(227 138 147)";
    emailErrorMsg.innerHTML = "Please, enter valid email";
  }
});

password.addEventListener("input", function () {
  if (passwordRegex.test(password.value)) {
    password.style.boxShadow = "rgba(0, 255, 123, 0.25) 0px 0px 0px 0.25rem";
    password.style.borderColor = "rgb(0, 255, 123)";
    passwordErrorMsg.innerHTML = "";
  } else {
    password.style.boxShadow = "0 0 0 .25rem rgb(253 13 162 / 25%)";
    password.style.borderColor = "rgb(227 138 147)";
    passwordErrorMsg.innerHTML = "Please, enter valid password";
  }
});

// -------------------------------------------------- Submit Form --------------------------------------------------

var userDataArr = [];
userDataArr = JSON.parse(localStorage.getItem("User Data")) || [];

form.addEventListener("submit", function (e) {
  var userData = {
    nameInput: namee.value,
    emailInput: email.value,
    passwordInput: password.value,
  };
  e.preventDefault();
  if (nameRegex.test(userData.nameInput == false)) {
  }
  if (emailRegex.test(userData.emailInput == false)) {
    emailErrorMsg.innerHTML = "Please, enter valid email";
  }
  if (passwordRegex.test(userData.passwordInput == false)) {
    passwordErrorMsg.innerHTML = "Please, enter valid password";
  }
  if (
    nameRegex.test(userData.nameInput) == true &&
    emailRegex.test(userData.emailInput) == true &&
    passwordRegex.test(userData.passwordInput) == true
  ) {
    userDataArr.unshift(userData);
    localStorage.setItem("User Data", JSON.stringify(userDataArr));
  }
  console.log(userDataArr);

  clear();
});

function clear() {
  namee.value = "";
  email.value = "";
  password.value = "";
  namee.style.boxShadow = "";
  email.style.boxShadow = "";
  password.style.boxShadow = "";
  namee.style.borderColor = "";
  email.style.borderColor = "";
  password.style.borderColor = "";
}
