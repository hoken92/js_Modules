import * as sign_up from "./sign_up_utils.js";
import * as login from "./login_utils.js";

//Registration
// ===========================================
const registerForm = document.getElementById("registration");
const userNameRegisterEl = registerForm.elements["username"];
const emailEl = registerForm.elements["email"];
const password1Register = registerForm.elements["password"];
// ===========================================

//Login
// ===========================================
const loginForm = document.getElementById("login");
const loginInCheckBoxEl = loginForm.elements["persist"];

// Register Event Listener
// ===========================================
registerForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  sign_up.validateRegister(evt);
  if (sign_up.validateRegister(evt)) {
    let userObj = {};

    console.log("form submitted");

    //   Form submission
    // =================================================
    // store username/email/password in local storage
    for (let i = 0; i < localStorage.length; i++) {
      if (userNameRegisterEl.value === localStorage.key(i)) {
        sign_up.displayMessage("That username is already taken");
        userNameRegisterEl.focus();
        return;
      }
    }
    userObj.username = userNameRegisterEl.value;
    userObj.email = emailEl.value;
    userObj.password = password1Register.value;

    localStorage.setItem(userNameRegisterEl.value, JSON.stringify(userObj));

    registerForm.reset();
  } else {
    return;
  }

  // Reset the form
});

// Login Event Listener
// ===========================================
loginForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  login.login(evt);

  if (login.login(evt)) {
    if (loginInCheckBoxEl.checked == true) {
      login.displaySuccessMessage("Success, Your login has been saved");
    } else {
      login.displaySuccessMessage("Success");
    }
    loginForm.reset();
  } else {
    return;
  }
});
