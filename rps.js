function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber===0) return "Rock";
    else if (randomNumber===1) return "Paper";
    else if (randomNumber===2) return "Scissors"
}

function getHumanChoice(){
    let input = prompt("Choose Rock, Paper,or Scissors");
    if(input === "Rock") return "Rock";
    else if (input === "Paper") return "Paper";
    else if (input === "Scissors") return "Scissors"
}

let humanScore = 0
let computerScore = 0