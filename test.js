console.log("Hello World")

// Return randomly string values of rock, paper, or scissors
/* 


*/


function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3) +1;


    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper': 'scissors';

}



 console.log(getComputerChoice());



 function getHumanChoice() {

    let userChoice = prompt('Rock, paper, scissors?');

     return userChoice;


 }

 console.log(getHumanChoice())

 let humanScore = 0
 let computerScore = 0

 function playRound(humanChoice, computerChoice) {

 {   humanChoice = humanChoice.toLowerCase(); }

    let a = 'rock' ,
    b = 'paper',
    c = 'scissors';

 
    if (humanChoice === a && computerChoice === b) {

        console.log('You lose! Paper beats Rock.')
    } 
    
    else if (humanChoice === b && computerChoice === a)

       { console.log('You win! Paper beats Rock.') }


        if (humanChoice === a && computerChoice === c ) {

            console.log('You Win! Rock beats Scissors.')
        } 
        
        else if (humanChoice === c.toUpperCase && computerChoice === a )
    
         {  console.log('You lose!  Rock beats Scissors.')
         }

    if (humanChoice === c && computerChoice === b) {

        console.log('You win! Scissors beats Paper.')
    } 
    
    else if (humanChoice === b && computerChoice === c )

        { console.log('You lose! Paper beats scissors.')
        }

    else if ( (humanChoice === a && computerChoice === a) || 
        (humanChoice === b && computerChoice === b) ||
        (humanChoice === c && computerChoice === c) ) {

        console.log('It\'s a tie!')
    }

    else {
        console.log('invalid')
    }

 }



 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

