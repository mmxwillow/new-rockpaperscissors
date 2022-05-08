function computerPlay(){
    let compChoice = Math.floor(Math.random()*3);
    switch (compChoice){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playerChoice(){
    let playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
        return `It's a draw. You both chose ${playerSelection}.`;
    else if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))
        return `You won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    else
        return `You lost! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
}

let playerSelection = playerChoice();
let computerSelection = computerPlay();

alert(playRound(playerSelection,computerSelection));
console.log(computerSelection);
