//Login
// ===========================================
const loginForm = document.getElementById("login");
const usernameLoginEl = loginForm.elements["username"];
const passwordLoginEl = loginForm.elements["password"];
const alertBox = document.getElementById("errorDisplay");

// Functions
// ===========================================

export function login(evt) {
  const userLoginVal = validateUsernameLogin();
  if (userLoginVal === false) {
    evt.preventDefault();
    return false;
  }

  const passwordLoginVal = validatePasswordLogin();
  if (passwordLoginVal === false) {
    evt.preventDefault();
    return false;
  }

  return true;
}

function validateUsernameLogin() {
  if (usernameLoginEl.value === "") {
    displayMessage("Username cannot be blank");
    usernameLoginEl.focus();
    return false;
  }

  let matchingUser = false;

  const username = usernameLoginEl.value.toLowerCase();
  for (let i = 0; i < localStorage.length; i++) {
    if (username === localStorage.key(i)) {
      matchingUser = true;
    }
  }

  if (matchingUser === false) {
    displayMessage("Username does not exist");
    usernameLoginEl.focus();
    return false;
  }
}

function validatePasswordLogin() {
  if (passwordLoginEl.value === "") {
    displayMessage("Password cannot be blank");
    passwordLoginEl.focus();
    return false;
  }

  let passwordArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    passwordArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  console.log(passwordArray);

  for (let i = 0; i < passwordArray.length; i++) {
    if (
      passwordLoginEl.value === passwordArray[i].password &&
      usernameLoginEl.value === passwordArray[i].username
    ) {
      console.log(passwordArray[i].password);
      continue;
    } else {
      displayMessage("Incorrect username or password");
      return false;
    }
  }
  //   const matchingPassword = passwordArray.map(function (pass) {
  //
  //     }
  //   });
}

export function displaySuccessMessage(message) {
  alertBox.textContent = message;
  alertBox.style.backgroundColor = "green";
  alertBox.style.color = "white";
  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

function displayMessage(message) {
  alertBox.textContent = message;
  alertBox.style.backgroundColor = "red";
  alertBox.style.color = "white";
  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}
