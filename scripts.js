const buttons = Array.from(document.querySelectorAll('.btn-group'));
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const playAgain = document.querySelector('#play-again');

playAgain.style.visibility = "hidden";

playAgain.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  results.textContent = "Pick a shape";
  score.textContent = "";
  playAgain.style.visibility = "hidden";

  buttons.forEach(button => {
    button.disabled = false;
  });
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    results.textContent = playRound(button.id, computerPlay());
    score.textContent = `You ${playerScore}:${computerScore} Computer`;
    game();
  });
});



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
    return `You won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}.`;
  }
}

function game() {
  if (playerScore === 5 || computerScore === 5) {
    score.textContent = "";
    if (playerScore > computerScore)
      results.textContent = `You won! You scored ${playerScore}. Computer scored ${computerScore}.`;
    else if (playerScore < computerScore)
      results.textContent = `You lost! Computer scored ${computerScore}. You scored ${playerScore}.`;
    else results.textContent = `It's a draw! You both scored ${playerScore}.`;

    playAgain.style.visibility = "visible";

    buttons.forEach(button => {
      button.disabled = true;
    });
  }

}

let playerScore = 0;
let computerScore = 0;
