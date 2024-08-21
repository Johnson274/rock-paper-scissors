const choices = ["rock","paper","scissors"];
const winners =[];


function playGame(){
    for (i = 1; i <=5; i++){
        playRound(i);
    }
    logWins();
}




function playRound(round){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(humanChoice,computerChoice);
    winners.push(winner);
    logRound(humanChoice,computerChoice,winner,round);
}


function getComputerChoice(){
    return choices [Math.floor(Math.random() * choices.length)];

}



function getHumanChoice(){
    let input = prompt("Choose Rock, Paper,or Scissors");
    while(input == null){
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be correct, but capitlization doesn't matter"
        );
        while (input == null){
            input = prompt("Type Rock, Paper, or Scissors");
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
  (choiceP === "rock" && choiceC === "scissors") || 
  (choiceP === "paper" && choiceC === "rock") || 
  (choiceP === "scissors" && choiceC === "paper")
  ) 
   {return "Player";
} else{
    return "Computer";
}
     
}

function logWins(){
    let playerWins = winners.filter((item)=> item == "Player").length;
    let computerWins = winners.filter((item)=> item == "Computer").length;
    let ties = winners.filter((item)=> item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:",ties);
}

function logRound(humanChoice,computerChoice,winner,round){
    console.log("Round:",round)
    console.log("Player Chose:",humanChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "won the Round")
    console.log("---------------------------------------");
}



