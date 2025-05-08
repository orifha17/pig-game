"use strict";
let dice = document.querySelector(".dice");
let cScore1 = document.querySelector(".currentscore1");
let cScore2 = document.querySelector(".currentscore2");
let btn1 = document.querySelector(".first");
let btn2 = document.querySelector(".second");
let btn3 = document.querySelector(".third");

// starting condition
dice.classList.add("hidden");
const highScore = [0, 0];
let activePlayer = 0;
let current = 0;

// rolling random functionality
btn2.addEventListener("click", function () {
  // generate random dice roll
  let random = Math.trunc(Math.random() * 6) + 1;

  // display dice
  dice.classList.remove("hidden");
  dice.src = `dice-${random}.png`;

  //chech if number is 1
  if (random !== 1) {
    current += random;
    document.querySelector(`.currentscore${activePlayer}`).textContent =
      current;
  } else {
    //switch player
  }
});

// holding your highscore
btn3.addEventListener("click", function () {
  document.querySelector(".highscoreone").textContent = current;
  cScore1.textContent = 0;
});
