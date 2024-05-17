function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber===0) return "Rock";
    else if (randomNumber===1) return "Paper";
    else if (randomNumber===2) return "Scissors"
}

function getHumanChoice(){
    let userInput = prompt("Choose Rock, Paper,or Scissors");
    let finalUserInput = userInput.toLowerCase();
    
    if(finalUserInput === "rock") return "Rock";
    else if (finalUserInput === "paper") return "Paper";
    else if (finalUserInput === "scissors") return "Scissors"
}

function playRound(humanChoice,computerChoice){

}

let humanScore = 0
let computerScore = 0 

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();