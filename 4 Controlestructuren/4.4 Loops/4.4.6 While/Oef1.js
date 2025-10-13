let prompt = require("prompt-sync")();

let getal = Number(prompt("geef een getal in: "));
let som=0;

while(getal > 0){
    som = som + getal;
    getal = Number(prompt("geef een getal in: "));
}

console.log(som);