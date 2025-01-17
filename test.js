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

    let userChoice = prompt('Rock, paper, scissors?', 'rock');

     return userChoice;


 }

 console.log(getHumanChoice())

