'use strict';

function calcSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = calcSecretNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaySecretNumber = function (secretNumber, width) {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = width;
};
const styleBody = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

// click is an event
// addEventListener is event listener
document.querySelector('.check').addEventListener('click', function () {
  // the function is a event handler
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('No number!');
  } else if (guessNumber === secretNumber) {
    displayMessage('Correct Number!!!');
    displaySecretNumber(secretNumber, '30rem');
    styleBody('#60b347');
    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = score;
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      displayMessage(guessNumber > secretNumber ? 'Too high!' : 'Too low!');
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = calcSecretNumber();
  displayScore(20);
  displaySecretNumber('?', '15rem');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  styleBody('#222');
});
