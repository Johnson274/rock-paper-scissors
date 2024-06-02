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

function checkWinner(choiceP,choiceC){

  if(choiceP === choiceC){
    return "Tie";
  }else if( 
  (choiceP === "rock" && choiceC === "scissors") || 
  (choiceP === "paper" && choiceC === "rock") || 
  (choiceP === "scissors" && choiceC === "paper")
  ) 
   {return "Player Wins";
} else{
    return "Computer Wins";
}
  
    
}



