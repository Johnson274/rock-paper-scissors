const choices = ["rock","paper","scissors"]



let humanScore = 0;
let computerScore = 0; 


function playGame(){
    for (i = 0; i <=5; i++){
        playRound()
    }
}




function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(humanChoice,computerChoice)
}


function getComputerChoice(){
    return choices [Math.floor(Math.random() * 3)];

}



function getHumanChoice(){
    let input = prompt("Choose Rock, Paper,or Scissors");
    while(input == null){
        input = promt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
}


function validateInput(choice){
    if (choices.includes(choice)){
        return true;
        }else{
            return false;
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



