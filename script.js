let playerScore = 0;
let computerScore = 0;
let result;
let playerSelection;
let computerSelection;

function getComputerChoice() {
  let choices = ["rock", "scissors", "paper"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  computerSelection = getComputerChoice();

  function computerWins() {
    computerScore++;
    result = `Computer wins! ${computerScore}`; 
  }
  function playerWins() {
    playerScore++;
    result = `Player wins! ${playerScore}`;
  }

  if (playerSelection === computerSelection) {
    result = "It is tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerWins();
    } else {
      playerWins();
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerWins();
    } else if (computerSelection == "paper") {
      playerWins();
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerWins();
    } else if (computerSelection == "rock") {
      playerWins();
    }
  } else {
    result = "error. Play again";
  }
  console.log(result);
}

let rockButton = document.body.appendChild(document.createElement("button"));
let scissorsButton = document.body.appendChild(document.createElement("button"));
let paperButton = document.body.appendChild(document.createElement("button"));

rockButton.innerText = "Rock"
scissorsButton.innerText = "Scissors"
paperButton.innerText = "Paper"

rockButton.addEventListener("click", function() {
  playerSelection = 'rock'
  playRound();
})
paperButton.addEventListener("click", function() {
  playerSelection = 'paper'
  playRound();
})
scissorsButton.addEventListener("click", function() {
  playerSelection = 'scissors'
  playRound();
})