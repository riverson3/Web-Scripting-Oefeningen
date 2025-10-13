const prompt = require("prompt-sync")();

let getal = prompt("Geef een getal: ");

if(getal > 0){
    console.log("Positief");
}
else if(getal == 0){
    console.log("Nul");
}
else{
    console.log("Negatief");
}