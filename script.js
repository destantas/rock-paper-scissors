let playerScore = 0;
let computerScore = 0;
let result = ``;
let playerSelection;
let computerSelection;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function computerWins() {
  computerScore++;
  result = `Computer takes the round!`;
}

function playerWins() {
  playerScore++;
  result = `Player takes the round!`;
}

function playRound() {
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock") {
    computerSelection === "paper" ? computerWins() : playerWins();
  } else if (playerSelection === "scissors") {
    computerSelection === "rock" ? computerWins() : playerWins();
  } else if (playerSelection === "paper") {
    computerSelection === "scissors" ? computerWins() : playerWins();
  } else {
    result = "Error. Play again.";
  }

  updateScore();
  checkGameOver();
}

function updateScore() {
  scoreText.innerHTML = `The result is: ${result} <br> Player: ${playerScore} <br> Computer: ${computerScore}`;
}

function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      scoreText.innerHTML = `PLAYER WON!`;
    } else {
      scoreText.innerHTML = `COMPUTER WON!`;
    }
    disableButtons();
  }
}

function disableButtons() {
  rockButton.disabled = true;
  scissorsButton.disabled = true;
  paperButton.disabled = true;
}

const rockButton = createButton("Rock", "rock");
const scissorsButton = createButton("Scissors", "scissors");
const paperButton = createButton("Paper", "paper");
const scoreDiv = document.body.appendChild(document.createElement("div"));
const scoreText = scoreDiv.appendChild(document.createElement("p"));

function createButton(text, type) {
  const btn = document.body.appendChild(document.createElement("button"));
  btn.innerText = text;
  btn.addEventListener("click", function () {
    playerSelection = type;
    playRound();
  });
  return btn;
}
