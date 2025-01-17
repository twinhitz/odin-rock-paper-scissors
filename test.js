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

 let userChoice = prompt("Rock, paper, scissors?");

    userChoice === 'rock' ? alert('ok') : 
    userChoice === 'paper' ? alert('no') : 
    userChoice === 'scissors' ? alert ('maybe') : 
    alert('invalid'); 


 }

 console.log(getHumanChoice())

