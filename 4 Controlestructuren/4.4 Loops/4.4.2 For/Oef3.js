let prompt = require("prompt-sync")();

let start = Number(prompt("Geef een start getal: "));
let eind = Number(prompt("Geef een eind getal: "));

for(i = start; i <= eind; i++){
    if(i %2 == 0){
        console.log(i);
    }
}