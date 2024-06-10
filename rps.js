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
    const winner = checkWinner(humanChoice,computerChoice)
}

function getHumanChoice(){
    let userInput = prompt("Choose Rock, Paper,or Scissors");
    let finalUserInput = userInput.toLowerCase();
    
    if(finalUserInput === "rock") return "Rock";
    else if (finalUserInput === "paper") return "Paper";
    else if (finalUserInput === "scissors") return "Scissors";
    
    while(finalUserInput== null){
        finalUserInput = prompt("Choose Rock, Paper, or Scissors");
    }
}

function checkWinner(choiceP,choiceC){

  if(choiceP === choiceC){
    return "Tie";
  }else if( 
  (choiceP === "Rock" && choiceC === "Scissors") || 
  (choiceP === "Paper" && choiceC === "Rock") || 
  (choiceP === "Scissors" && choiceC === "Paper")
  ) 
   {return "Player Wins";
} else{
    return "Computer Wins";
}
  
    
}



