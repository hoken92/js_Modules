# Creating a Restaurant Review

You get to leave an amazing review for your favorite restaurants with this webpage.

**Link to project:** https://github.com/hoken92/js_Restaurant_Reviews

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

1. Within the form, there are multiple validations need to be met.
   1. Rating and Restaurant review fields are required and will prompt the user to enter a value.
   2. Full name, Restaurant name cannot be empty
   3. Date Visited needs to be a current or past date. Any future dates are invalid
      - If 2 or 3 is empty, it will display an error box with the message and focus on the failed input field
   4. The form will reset when the form is successfully submitted.
2. There are two event listeners in this webpage
   1. When a user submits a review with all the fields filled. It will capture all of the input values and be captured inside a object with key, values.
      - Elements will be then created and the object key/value pairs will then be inserted into their respected elements as their textContent and appended into the info-container div.
   2. When the user clicks on a review, it will set the div with an active class and highlight the review. It will loop iterate through the collection of elements if there are multiple and remove all active classes. Since only one review can be highlighted.

## Optimizations

1. It'd be great to be able to add reviews to the top as they're created and list them in descending order by create date.
2. Another cool idea would be to have a section that allows a random review to be featured

## Lessons Learned:

I learned how to use addEventListeners in this project and how to retreive target elements and their parent/child elements. It was a little tricky when some elements had the same partial identifier when I was using control flow depending on those class names. I ended up having to change an id name, so it's more unique.

## Contributor:

- Kenneth Ho
