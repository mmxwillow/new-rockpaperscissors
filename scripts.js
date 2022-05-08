function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?");
  return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
    return `It's a draw. You both chose ${playerSelection}.`;
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    return `You won! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lost! ${
      computerSelection[0].toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}.`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerSelection = computerPlay();

    alert(playRound(playerSelection, computerSelection));
  }
  if(playerScore > computerScore)
    alert(`You won! You scored ${playerScore}. Computer scored ${computerScore}.`);
else if(playerScore < computerScore)
  alert(`You lost! Computer scored ${computerScore}. You scored ${playerScore}`);
  else alert(`It's a draw! You both scored ${playerScore}.`);

  let playAgain = confirm("Do you wanna play again?");

  if(playAgain) {
      playerScore = 0;
      computerScore = 0;
      game();
  }
}

let playerScore = 0;
let computerScore = 0;

game();
