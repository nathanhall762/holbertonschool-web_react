// Importing jQuery
import $ from 'jquery';
// Importing lodash as _
import _ from 'lodash';

// Variable to keep track of button clicks
let count = 0;

// Function to update the counter
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Function to add elements
function addElements() {
  // Adding paragraph elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  
  // Adding button element
  $('body').append('<button id="clickButton">Click here to get started</button>');
  
  // Adding paragraph element with id='count'
  $('body').append('<p id="count"></p>');
  
  // Adding another paragraph
  $('body').append('<p>Copyright - Holberton School</p>');
  
  // Binding the debounce function to the click event using .on()
  $('#clickButton').on('click', _.debounce(updateCounter, 500));
}

// Adding elements when the document is ready
$(function() {
  addElements();
});
