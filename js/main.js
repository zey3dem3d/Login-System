// -------------------------------------------------- Variables --------------------------------------------------

var namee = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signInForm = document.getElementById("signInForm");
var LoginForm = document.getElementById("LoginForm");
var nameErrorMsg = document.getElementById("nameErrorMessage");
var emailErrorMsg = document.getElementById("emailErrorMessage");
var passwordErrorMsg = document.getElementById("passwordErrorMessage");
var exist = document.getElementById("exist");
var success = document.getElementById("success");
var inCorrect = document.getElementById("inCorrect");
var h1Home = document.getElementById("h1Home");
var logout = document.getElementById("logout");

// -------------------------------------------------- Validation --------------------------------------------------

var nameRegex = /[a-z]{3,}/;
var emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var resetPassRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

namee?.addEventListener("input", function () {
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

email?.addEventListener("input", function () {
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

password?.addEventListener("input", function () {
  if (passwordRegex.test(password.value)) {
    password.style.boxShadow = "rgba(0, 255, 123, 0.25) 0px 0px 0px 0.25rem";
    password.style.borderColor = "rgb(0, 255, 123)";
    passwordErrorMsg.innerHTML = "";
  } else {
    password.style.boxShadow = "0 0 0 .25rem rgb(253 13 162 / 25%)";
    password.style.borderColor = "rgb(227 138 147)";
    passwordErrorMsg.classList.replace("d-none", "d-block");
  }
});

// -------------------------------------------------- Submit Form --------------------------------------------------

var userDataArr = [];
userDataArr = JSON.parse(localStorage.getItem("User Data")) || [];

signInForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  var userData = {
    nameInput: namee.value,
    emailInput: email.value,
    passwordInput: password.value,
  };

  if (
    nameRegex.test(userData.nameInput) == true &&
    emailRegex.test(userData.emailInput) == true &&
    passwordRegex.test(userData.passwordInput) == true &&
    !isExist(userDataArr, userData)
  ) {
    userDataArr.push(userData);
    localStorage.setItem("User Data", JSON.stringify(userDataArr));
    success.classList.replace("d-none", "d-block");
    clear();
    setTimeout(function () {
      window.location.href = "./login.html";
    }, 3000);
  }
});

// -------------------------------------------------- Is Exist ----------------------------------------------------

function isExist(arr, newObj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].emailInput == newObj.emailInput) {
      index = i;
      exist?.classList.replace("d-none", "d-block");
      return true;
    }
  }
  exist?.classList.replace("d-block", "d-none");
  return false;
}

// -------------------------------------------------- Clear Inputs -------------------------------------------------

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

// -------------------------------------------------- Login Page --------------------------------------------------

LoginForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  var userData = {
    emailInput: email.value,
    passwordInput: password.value,
  };
  if (isCorrect(userDataArr, userData)) {
    success.classList.replace("d-none", "d-block");
    setTimeout(function () {
      window.location.href = "./home.html";
    }, 3000);
    clear();
  }
});

function isCorrect(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i].emailInput == obj.emailInput &&
      arr[i].passwordInput == obj.passwordInput
    ) {
      localStorage.setItem("nameInput", JSON.stringify(arr[i].nameInput));
      inCorrect.classList.replace("d-block", "d-none");
      return true;
    }
  }
  inCorrect.classList.replace("d-none", "d-block");
  return false;
}

// -------------------------------------------------- Home Page --------------------------------------------------

if (localStorage.getItem("nameInput") != null) {
  h1Home.innerHTML += " " + localStorage.getItem("nameInput");
}

// -------------------------------------------------- Logout --------------------------------------------------

logout?.addEventListener("click", function () {
  window.location.href = "./login.html";
});
