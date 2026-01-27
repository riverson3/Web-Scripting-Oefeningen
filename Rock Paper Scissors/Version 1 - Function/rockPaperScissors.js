// prompt bruikbaar maken
const prompt = require("prompt-sync")();

// main: gebruikersinput vragen en functies uitvoeren
const main = prompt("rock, paper of scissors")

// function 1: pickComputerMove
function pickComputerMove(){
    let randomNumber = Math.random();
    if(randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
};
/* Returnt 'rock', 'paper' of 'scissors' */
/* Er moet een 1/3 kans zijn op rock, paper of scissors -> random! */

// function 2: decideWinner
function decideWinner(userMove, computerMove){
    let result;
    if(userMove == computerMove){
        result = 'draw'
    }
    else if(userMove == "rock" && computerMove == "scissors"){
        result = 'win'
    }
    else if(userMove == 'scissors' && computerMove =='paper'){
        result = 'win'
    }
    else if(userMove == 'paper' && computerMove == 'rock'){
        result = 'win'
    }
    else{
        result = 'lose'
    }
    return result;
}
/* neemt 2 parameters: userMove en computerMove */
/* vergelijk beide parameters */
/* return 'win', 'lose' of 'draw' */