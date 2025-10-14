let prompt = require("prompt-sync")();
let woord = prompt("Geef een tekst: ");

let antwoord="";
for(let i = woord.length -1; i >= 0; i--){
    antwoord = antwoord + woord[i];
}
console.log(antwoord);