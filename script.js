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
  playerSelection = playerSel();
  computerSelection = getComputerChoice();

  function playerSel() {
    return playerSelection = prompt("Rock, paper or scissors?", "Choose one").toLowerCase();
  }

  function computerWins() {
    computerScore++;
    result = `Computer wins! ${computerScore}`;
    return result;
  }
  function playerWins() {
    playerScore++;
    result = `Player wins! ${playerScore}`;
    return result;
  }

  if (playerSelection === computerSelection) {
    result = "It is tie";
    return result;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return computerWins();
    } else {
      return playerWins();
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return computerWins();
    } else if (computerSelection == "paper") {
      return playerWins();
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return computerWins();
    } else if (computerSelection == "rock") {
      return playerWins();
    }
  } else {
    return "error. Play again";
  }
  
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `Player chose ${playerSelection} and computer chose ${computerSelection}. ${result}`
    );
    console.log(`Current scores`);
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${playerScore}`);
  }
}

game();
