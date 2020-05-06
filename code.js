var statusValue = document.getElementById("statusValue");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var easyCaller = document.getElementById("levelEasyBtn");
var mediumCaller = document.getElementById("levelMediumBtn");
var hardCaller = document.getElementById("levelHardBtn");
var min = 0;
var max = 255;
var correctColorSquare;
var maxDependDifficulty = 9;
var correctRed;
var correctGreen;
var correctBlue;
var colors = document.querySelectorAll(".oneOfColors");
var tryNums = 1;
statusValue.textContent = "Ready / Difficulty - hard";
function randomRed() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}
function randomGreen() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}
function randomBlue() {
  return Math.floor(Math.random() * (+max - +min)) + +min;;
}
function correctSquare() {
  correctColorSquare = Math.floor(Math.random() * (+maxDependDifficulty - +0)) + +0;;
}
function easyDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "hidden";
  document.getElementById("lvlHard").style.visibility = "hidden";
  maxDependDifficulty = 3;
  statusValue.textContent = "Ready / Difficulty - easy";
  easyCaller.classList.add("levelEasyBtnActive");
  mediumCaller.classList.remove("levelMediumBtnActive");
  hardCaller.classList.remove("levelHardBtnActive");
  newColor();
}
function mediumDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "visible";
  document.getElementById("lvlHard").style.visibility = "hidden";
  maxDependDifficulty = 6;
  statusValue.textContent = "Ready / Difficulty - medium";
  easyCaller.classList.remove("levelEasyBtnActive");
  mediumCaller.classList.add("levelMediumBtnActive");
  hardCaller.classList.remove("levelHardBtnActive");
  newColor();
}
function hardDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "visible";
  document.getElementById("lvlHard").style.visibility = "visible";
  maxDependDifficulty = 9;
  statusValue.textContent = "Ready / Difficulty - hard";
  easyCaller.classList.remove("levelEasyBtnActive");
  mediumCaller.classList.remove("levelMediumBtnActive");
  hardCaller.classList.add("levelHardBtnActive");
  newColor();
}
easyCaller.classList.remove("levelEasyBtnActive");
mediumCaller.classList.remove("levelMediumBtnActive");
hardCaller.classList.add("levelHardBtnActive");
function newColor() {
  tryNums = 1;
  correctSquare();
  correctRed = randomRed();
  correctGreen = randomBlue();
  correctBlue = randomGreen();
  red.textContent = correctRed;
  green.textContent = correctGreen;
  blue.textContent = correctBlue;
  for (i = 0; i <= (colors.length - 1); i++) {
    colors[i].style.background = "rgb(" + randomRed() + ", " + randomBlue() + ", " + randomGreen() + ")";
    if (i < maxDependDifficulty) {
      colors[i].style.visibility = "visible";
      colors[i].setAttribute("onclick", "checkHit(this, this.id)");
      colors[i].style.cursor = "pointer";
    } else
      colors[i].style.visibility = "hidden";
  }
  colors[correctColorSquare].style.background = "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";
  if (maxDependDifficulty == 9) {
    statusValue.textContent = "Ready / Difficulty - hard";
  } else if (maxDependDifficulty == 6) {
    statusValue.textContent = "Ready / Difficulty - medium";
  } else {
    statusValue.textContent = "Ready / Difficulty - easy";
  }
}
function checkHit(target, targetID) {
  if (targetID === "color" + (correctColorSquare + 1)) {
    statusValue.textContent = "You win! Number of tries " + tryNums;
    for (i = 0; i <= (maxDependDifficulty - 1); i++) {
      colors[i].style.visibility = "visible";
      colors[i].setAttribute("onclick", "");
      colors[i].style.background = "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";
      colors[i].style.cursor = "context-menu";
    }
  } else {
    target.style.visibility = "hidden";
    tryNums++;
  }
}
