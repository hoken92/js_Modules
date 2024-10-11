// Selectors

// Form
const formEl = document.getElementById("review-form");
const nameEl = document.getElementById("name");
const restNameEl = document.getElementById("restaurant-name");
const ratingEl = document.getElementById("rating");
const dateEl = document.getElementById("visit-date");
const reviewInfoEl = document.getElementById("review-info");
const submitBtn = formEl.lastElementChild;
const messageBox = document.getElementById("alertMessage");

// Reviews
const reviewsContainer = document.querySelector("#info-container");

// Functions

// Call the validation on all fields in the form
export function validateForm(evt) {
  let reviewInfo = {};

  const ratingVal = ratingEl.value;
  const reviewVal = reviewInfoEl.value;

  // run Validate Name
  const nameVal = validateName();
  if (nameVal === false) {
    evt.preventDefault();
    return false;
  }

  // run Validate Restaurant Name
  const resturantVal = validateRestaurant();
  if (resturantVal === false) {
    evt.preventDefault();
    return false;
  }

  const dateVal = validateDate();
  if (dateVal === false) {
    evt.preventDefault();
    return false;
  }

  reviewInfo = {
    name: nameVal,
    Restaurant_name: resturantVal,
    rating: ratingVal,
    date_visited: dateVal,
    review: reviewVal,
  };

  // Inserts the reviewInfo object inside review array
  //   review.push(reviewInfo);
  return reviewInfo;
}

// Function to set the clicked div to a class of "active"
export function setActiveClass(evt) {
  const activeDiv = evt.target.parentNode;

  if (activeDiv.localName === "div" && activeDiv.classList.contains("review")) {
    if (activeDiv.classList.contains("active")) {
      return activeDiv.classList.remove("active");
    } else {
      for (const child of reviewsContainer.children) {
        child.classList.remove("active");
      }
      return activeDiv.classList.add("active");
    }
  } else {
    return;
  }
}

// Define Validate functions
function validateName() {
  if (nameEl.value === "") {
    displayMessage("Please provide a name");
    nameEl.focus();
    return false;
  }
  return nameEl.value;
}

function validateRestaurant() {
  if (restNameEl.value === "") {
    displayMessage("Please provide a resturant name");
    restNameEl.focus();
    return false;
  }
  return restNameEl.value;
}

function validateDate() {
  const todaysDate = new Date().toISOString().split("T", 1);

  if (dateEl.value > todaysDate) {
    displayMessage("Please enter a valid date.");
    return false;
  } else if (dateEl.value === "") {
    displayMessage("Please enter a date.");
    return false;
  }
  return dateEl.value;
}

// Uses window.setTimeOut method for alert box to disappear
function displayMessage(message) {
  messageBox.style.display = "flex";
  messageBox.style.textAlign = "center";
  messageBox.style.alignItems = "center";
  messageBox.style.justifyContent = "center";
  messageBox.textContent = message;
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 2000);
}
