let humanScore = 0;
let computerScore = 0; 



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber===0) return "Rock";
    else if (randomNumber===1) return "Paper";
    else if (randomNumber===2) return "Scissors"
}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
}

function getHumanChoice(){
    let userInput = prompt("Choose Rock, Paper,or Scissors");
    let finalUserInput = userInput.toLowerCase();
    
    if(finalUserInput === "rock") return "Rock";
    else if (finalUserInput === "paper") return "Paper";
    else if (finalUserInput === "scissors") return "Scissors";
}

function checkWinner(humanChoice,computerChoice){

    if (humanChoice === "rock" && computerChoice === "rock") return "It's a tie";
    else if (humanChoice === "rock" && computerChoice === "paper") return "You lose! Paper beats Rock";
    else if (humanChoice === "rock" && computerChoice === "scissors") return "You win! Rock beats Scissors";
    else if (humanChoice === "paper" && computerChoice === "rock") return "You win! Paper beats Rock";
    else if (humanChoice === "paper" && computerChoice === "paper") return "It's a tie";
    else if (humanChoice === "paper" && computerChoice === "scissors") return "You lose, Scissors beats Paper";
    else if (humanChoice === "scissors" && computerChoice === "rock") return "You lose, Rock beats Scissors";
    else if (humanChoice === "scissors" && computerChoice === "paper") return "You win, Scissors beats Paper";
    else if (humanChoice === "scissors" && computerChoice === "scissors") return "It's a tie";
}



