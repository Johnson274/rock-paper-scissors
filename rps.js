function getComputerChoice(X){
    return Math.floor(Math.random() * X);
    if (X===0) return "rock";
    else if (X===1) return "paper";
    else if (X===2) return "scissors"
}