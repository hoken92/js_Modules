import * as utils from "./utils.js";

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

// Runs the functions when a user submits the form
// Form will reset once form is sucessfully submitted
formEl.addEventListener("submit", function (evt) {
  // Prevents form from defaulting
  evt.preventDefault();

  //Runs the validate form function
  const reviewSubmission = utils.validateForm(evt);

  // If reviewSubmission contains a false value, focus on the empty input field and throw a message
  if (reviewSubmission === false) {
    return;
  } else {
    // Captures reviewer info into a variable
    const reviewerString = `${reviewSubmission.name} | ${reviewSubmission.Restaurant_name} | Rating: ${reviewSubmission.rating} | Visit Date: ${reviewSubmission.date_visited}`;
    const reviewString = `${reviewSubmission.review}`;
    console.log(reviewString);

    // Creates a new div to store review information and appends to reviews container
    const newReviewDiv = reviewsContainer.appendChild(
      document.createElement("div")
    );
    newReviewDiv.classList.add("review");

    // Creates a <p> element and inserts reviewSubmission objects as a string
    // Set the review-header class
    // Append it to the reviewDiv
    const newReviewHeader = newReviewDiv.appendChild(
      document.createElement("p")
    );
    newReviewHeader.classList.add("review-header");
    newReviewHeader.textContent = reviewerString;

    //Creates a document fragment
    // Creates a date stamp and appends into the fragment
    // Append the fragment to the p element above
    // Set the date-stamp class
    const newFrag = new DocumentFragment();
    const timeStamp = newFrag.appendChild(document.createElement("span"));
    newReviewHeader.appendChild(newFrag);
    timeStamp.classList.add("date-stamp");
    timeStamp.textContent = new Date().toLocaleString();

    // Create another p tag to add reviewSubmission.review object and append it to the review container
    // Set the review-text class
    const newReviewInfo = newReviewDiv.appendChild(document.createElement("p"));
    newReviewInfo.classList.add("review-text");
    newReviewInfo.textContent = reviewString;

    formEl.reset();
  }
});

// Event listener for Review container to set an active class to a selected review
reviewsContainer.addEventListener("click", function (evt) {
  utils.setActiveClass(evt);
});
