var statusValue = document.getElementById("statusValue");
var dropdownDifficulty = document.getElementById("dropdownDifficulty");
var dropdownDifficultyBtn = document.getElementById("dropdown");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var easyCaller = document.getElementById("levelEasyBtn");
var mediumCaller = document.getElementById("levelMediumBtn");
var hardCaller = document.getElementById("levelHardBtn");
var colors = document.querySelectorAll(".oneOfColors");
var correctColorSquare;
var maxDependDifficulty = 9;
var correctRed;
var correctGreen;
var correctBlue;
var tryNums = 1;
resizeSquares();
statusValue.textContent = "Ready";
dropdownDifficulty.textContent = "HARD";
function randomColorSyntax() {
  return Math.floor(Math.random() * 256);
}

function correctSquare() {
  correctColorSquare = Math.floor(Math.random() * maxDependDifficulty);
}

function easyDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "hidden";
  document.getElementById("lvlHard").style.visibility = "hidden";
  maxDependDifficulty = 3;
  dropdownDifficulty.textContent = "EASY";
  dropdownDifficultyBtn.classList.remove("btn-danger");
  dropdownDifficultyBtn.classList.remove("btn-warning");
  dropdownDifficultyBtn.classList.add("btn-success");
  easyCaller.classList.add("levelEasyBtnActive");
  mediumCaller.classList.remove("levelMediumBtnActive");
  hardCaller.classList.remove("levelHardBtnActive");
  newColor();
}

function mediumDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "visible";
  document.getElementById("lvlHard").style.visibility = "hidden";
  maxDependDifficulty = 6;
  dropdownDifficulty.textContent = "MEDIUM";
  dropdownDifficultyBtn.classList.remove("btn-danger");
  dropdownDifficultyBtn.classList.add("btn-warning");
  dropdownDifficultyBtn.classList.remove("btn-success");
  easyCaller.classList.remove("levelEasyBtnActive");
  mediumCaller.classList.add("levelMediumBtnActive");
  hardCaller.classList.remove("levelHardBtnActive");
  newColor();
}

function hardDifficulty() {
  document.getElementById("lvlMedium").style.visibility = "visible";
  document.getElementById("lvlHard").style.visibility = "visible";
  maxDependDifficulty = 9;
  dropdownDifficulty.textContent = "HARD";
  dropdownDifficultyBtn.classList.add("btn-danger");
  dropdownDifficultyBtn.classList.remove("btn-warning");
  dropdownDifficultyBtn.classList.remove("btn-success");
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
  correctRed = randomColorSyntax();
  correctGreen = randomColorSyntax();
  correctBlue = randomColorSyntax();
  red.textContent = correctRed;
  green.textContent = correctGreen;
  blue.textContent = correctBlue;
  statusValue.textContent = "Ready";
  for (i = 0; i <= (colors.length - 1); i++) {
    colors[i].style.backgroundColor = "rgb(" + randomColorSyntax() + ", " + randomColorSyntax() + ", " + randomColorSyntax() + ")";
    colors[i].classList.remove("fade-out");
    if (i < maxDependDifficulty) {
      colors[i].style.visibility = "visible";
      colors[i].setAttribute("onclick", "checkHit(this, this.id)");
      colors[i].style.cursor = "pointer";

    } else
      colors[i].style.visibility = "hidden";
  }
  colors[correctColorSquare].style.backgroundColor = "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";
  if (maxDependDifficulty == 9) {
    dropdownDifficulty.textContent = "HARD";
  } else if (maxDependDifficulty == 6) {
    dropdownDifficulty.textContent = "MEDIUM";
  } else {
    dropdownDifficulty.textContent = "EASY";
  }
}

function checkHit(target, targetID) {
  if (targetID === "color" + (correctColorSquare + 1)) {
    statusValue.textContent = "Correct! Number of tries: " + tryNums;
    for (i = 0; i <= (maxDependDifficulty - 1); i++) {
      colors[i].style.visibility = "visible";
      colors[i].setAttribute("onclick", "");
      colors[i].style.backgroundColor = "rgb(" + correctRed + ", " + correctGreen + ", " + correctBlue + ")";
      colors[i].style.cursor = "context-menu";
    }
  } else {
    setTimeout(function() {
      target.style.visibility = "hidden";
    }, 250);
    target.classList.add("fade-out");
    tryNums++;
  }
}
console.log(navigator.userAgent);
window.addEventListener("resize", resizeSquares);
function resizeSquares() {
  // if(window.innerWidth<window.innerHeight) {
  //   console.log("You are on mobile");
  // }
  for (i = 0; i <= (maxDependDifficulty - 1); i++) {
  colors[i].style.height = colors[i].offsetWidth + "px";
  }
}
