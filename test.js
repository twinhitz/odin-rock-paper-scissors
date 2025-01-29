console.log("Hello World")

// Return randomly string values of rock, paper, or scissors
/* 


*/



 let humanScore = 0
 let computerScore = 0



function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3) +1;


    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper': 'scissors';

}





 function getHumanChoice() {

    let userChoice = prompt('Rock, paper, scissors?');

     return userChoice;


 }



function playGame() {

    function playRound(humanChoice, computerChoice) {

        {   humanChoice = humanChoice.toLowerCase(); };
       
           let a = 'rock' ,
           b = 'paper',
           c = 'scissors';
       
        
           if (humanChoice === a && computerChoice === b) {
       
               console.log('You lose! Paper beats Rock.');
               computerScore += 1;
           };
           
           if (humanChoice === b && computerChoice === a)
       
              { console.log('You win! Paper beats Rock.');
               humanScore += 1;
       
              };
       
       
           if (humanChoice === a && computerChoice === c ) {
       
                   console.log('You Win! Rock beats Scissors.')
                   humanScore += 1;
               } ;
               
           if (humanChoice === c && computerChoice === a )
           
                {  console.log('You lose!  Rock beats Scissors.');
                   computerScore += 1;
                };
       
           if (humanChoice === c && computerChoice === b) {
       
               console.log('You win! Scissors beats Paper.');
               humanScore += 1;
           };
           
           if (humanChoice === b && computerChoice === c )
       
               { console.log('You lose! Paper beats scissors.')
                   computerScore += 1;
               };
       
           if ( (humanChoice === a && computerChoice === a) || 
               (humanChoice === b && computerChoice === b) ||
               (humanChoice === c && computerChoice === c) ) {
       
               console.log('It\'s a tie!')
           };
       
        }
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    

    playRound(humanSelection, computerSelection);
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);




    console.log(humanScore, computerScore);
    

if (humanScore > computerScore) {

    console.log('Human wins!')

}

else if (computerScore > humanScore) {

    console.log('Computer wins!')
}

else {console.log ('It\'s a tie!') }
  

}

playGame();
