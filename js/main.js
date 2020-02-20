// HTML Document   --->   HTML elements
// JavaScript  --->   HTML element = Object
// JavaScript  --->   Function = a piece of code wrapped in value
// JavaScript  --->   Event = click scroll or hover ( are events that happen on the page )

// The Environement
const imageSlider = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg"
];
const imageContainer = document.querySelector("img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let i = 1;
let j = 5;

// The Function
function prevFunc() {
  if (j === 0) {
    j = 5;
  } else {
    imageContainer.src = imageSlider[j];
    j = j - 1;
  }
}
function nextFunc() {
  if (i === 6) {
    i = 0;
  } else {
    imageContainer.src = imageSlider[i];
    i = i + 1;
  }
}
setInterval(nextFunc, 3000);

// The Event
prevBtn.addEventListener("click", prevFunc);
nextBtn.addEventListener("click", nextFunc);
