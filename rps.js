const choices = ["rock","paper","scissors"]
const winners =[];


function playGame(){
    for (i = 1; i <=5; i++){
        playRound(i);
    }
    logWins()
}




function playRound(round){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(humanChoice,computerChoice);
    winners.push(winner);
    logRound(humanChoice,computerChoice,winner,round);
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

function logWins(){
    let playerWins = winners.filter((item)=> item == "Player").length;
    let computerWins = winners.filter((item)=> item == "Computer").length;
    let ties = winners.filter((item)=> item == "Tie").length;
    console.log("Results:");
    consol.log("Player Win:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:",ties);
}

function logRound(humanChoice,computerChoice,winner,round){
    console.log("Round:",round)
    console.log("Player Chose:",humanChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "won the Round")
}



