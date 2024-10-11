//Registration
// ===========================================
const registerForm = document.getElementById("registration");
const userNameRegisterEl = registerForm.elements["username"];
const emailEl = registerForm.elements["email"];
const password1Register = registerForm.elements["password"];
const password2Register = registerForm.elements["passwordCheck"];
const alertBox = document.getElementById("errorDisplay");

// Functions
// ===========================================
export function validateRegister(evt) {
  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.preventDefault();
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    return false;
  }

  return true;
}

function validateEmail() {
  let emailVal = emailEl.value;

  if (emailVal === "") {
    displayMessage("Please provide an email.");
    emailEl.focus();
    return false;
  }

  if (emailVal.includes("example.com")) {
    displayMessage("Your email can't be from example.com domain");
    emailEl.focus;
    return false;
  }

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    displayMessage(
      "Your email must include an @ symbol which must not be at the beginning of the email."
    );
    emailEl.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    displayMessage(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    emailEl.focus();
    return false;
  }

  return emailVal;
}

function validatePassword() {
  if (password1Register.value.toLowerCase() === "password") {
    displayMessage("Password cannot contain the word 'password'");
    password1Register.focus();
    return false;
  }

  if (password1Register.value === userNameRegisterEl.value) {
    displayMessage("Password cannot be the same as username!");
    password1Register.focus();
    return false;
  }

  if (password1Register.value !== password2Register.value) {
    displayMessage("Both password fields must match!");
    password2Register.focus();
    return false;
  }

  return password1Register.value;
}

export function displayMessage(message) {
  alertBox.textContent = message;
  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}
