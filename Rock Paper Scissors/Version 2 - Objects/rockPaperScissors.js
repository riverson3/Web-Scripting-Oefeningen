// object 'score' met properties 'wins', 'loses' en ties
let score={
    wins: 0,
    losses: 0,
    ties: 0
};

// prompt bruikbaar maken
const prompt = require("prompt-sync")();

// main: gebruikersinput vragen en functies uitvoeren
let main = prompt("rock, paper of scissors: ");

while(main != 'rock' && main != 'paper' && main != 'scissors'){
    main = prompt("rock, paper of scissors: ");
}


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
    if(userMove == computerMove){
        score.ties++
    }
    else if(userMove == "rock" && computerMove == "scissors"){
        score.wins++
    }
    else if(userMove == 'scissors' && computerMove =='paper'){
        score.wins++
    }
    else if(userMove == 'paper' && computerMove == 'rock'){
        score.wins++
    }
    else{
        score.losses++
    }
}

let compter = pickComputerMove();
decideWinner(main, compter);
console.log(score.wins + "-" + score.losses + "-" + score.ties);