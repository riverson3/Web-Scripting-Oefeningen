const prompt = require("prompt-sync")();

let cijfer = Number (prompt("geef een getal tussen 1 en 3: "));

switch(cijfer){
    case 1:
        console.log("Eén");
        break;
    case 2:
        console.log("Twee");
        break;
    case 3:
        console.log("Drie");
        break;
    default:
        console.log("Geef een getal tussen 1 en 3 in");
        break;
}