var statusValue = document.getElementById("statusValue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var min = 0;
var max = 255;

function randomRed() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function randomGreen() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function randomBlue() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}

function newColor() {
  statusValue.textContent = "ready";
  // var redValue = Math.floor(Math.random() * (+max - +min)) + +min; ;
  // var greenValue = Math.floor(Math.random() * (+max - +min)) + +min; ;
  // var blueValue = Math.floor(Math.random() * (+max - +min)) + +min; ;
  var correctColorSquare = Math.floor(Math.random() * (+8 - +0)) + +0;;
  var correctRed = randomRed();
  var correctGreen = randomBlue();
  var correctBlue = randomGreen();
  red.textContent = correctRed;
  green.textContent = correctGreen;
  blue.textContent = correctBlue;
  var colors = document.querySelectorAll(".oneOfColors");
  for (i = 0; i <= (colors.length - 1); i++) {
    colors[i].style.background = "rgb(" + randomRed() + ", " + randomBlue() + ", " + randomGreen() + ")";
  }
  colors[correctColorSquare].style.background = "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";
}
