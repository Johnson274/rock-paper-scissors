const choices = ["rock","paper","scissors"]
const winners =[];


let humanScore = 0;
let computerScore = 0; 


function playGame(){
    for (i = 1; i <=5; i++){
        playRound()
    }
}




function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(humanChoice,computerChoice);
    winners.push(winner);
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
    let check = validateInput(input);
    while (check == false){
        input = promt(
            "Type Rock, Paper, or Scissors. Spelling needs to be correct, but capitlization doesn't matter"
        );
        while (input == null){
            input = promt("Type Rock, Paper, or Scissors");
        }
       input = input.toLowerCase();
       check= validateInput(input);
    }
    return input;
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





