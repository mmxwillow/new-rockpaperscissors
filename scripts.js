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

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
