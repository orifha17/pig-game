"use strict";
let dice = document.querySelector(".dice");
let cScore1 = document.querySelector(".currentscore0");
let cScore2 = document.querySelector(".currentscore1");
let btnNew = document.querySelector(".first");
let btnRoll = document.querySelector(".second");
let btnHold = document.querySelector(".third");
let back1 = document.querySelector(".player0");
let back2 = document.querySelector(".player1");

// starting condition
dice.classList.add("hidden");
let highScore = [0, 0];
let activePlayer = 0;
let current = 0;
let playing = true;

// function switch player
const switchPlayer = () => {
  document.querySelector(`.currentscore${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  current = 0;
  back1.classList.toggle("active");
  back2.classList.toggle("active");
  back1.style.transition = "0.8s";
  back2.style.transition = "0.8s";
};

// button roll function
btnRoll.addEventListener("click", function () {
  // generate random dice roll
  if (playing) {
    let random = Math.trunc(Math.random() * 6) + 1;

    // display dice
    dice.classList.remove("hidden");
    dice.src = `dice-${random}.png`;

    //check if number is 1
    if (random !== 1) {
      current += random;
      document.querySelector(`.currentscore${activePlayer}`).textContent =
        current;
    } else {
      switchPlayer();
    }
  }
});

// button hold function
btnHold.addEventListener("click", function () {
  if (playing) {
    highScore[activePlayer] += current;
    document.querySelector(`.highscore${activePlayer}`).textContent =
      highScore[activePlayer];

    if (highScore[activePlayer] >= 50) {
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("active");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

// button new/restart game
btnNew.addEventListener("click", () => {
  playing = true;
  document
    .querySelector(`.player${activePlayer}`)
    .classList.remove("player-winner");
  current = 0;
  activePlayer = 0;
  highScore = [0, 0];
  cScore1.textContent = 0;
  cScore2.textContent = 0;
  back1.classList.add("active");
  back2.classList.remove("active");
  document.querySelector(".highscore0").textContent = 0;
  document.querySelector(".highscore1").textContent = 0;
  dice.classList.add("hidden");
});
