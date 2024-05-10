function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber===0) return "rock";
    else if (randomNumber===1) return "paper";
    else if (randomNumber===2) return "scissors"
}

function getHumanChoice(){
    let input = prompt("Choose Rock, Paper,or Scissors");
    if(input === "Rock") return "Rock";
    else if (input === "Paper") return "Paper";
    else if (input === "Scissors") return "Scissors"
}