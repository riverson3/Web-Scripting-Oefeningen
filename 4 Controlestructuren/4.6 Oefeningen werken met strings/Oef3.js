let prompt = require("prompt-sync")();

let tekst = prompt("geef een tekst in: ");

for(i = 0; i <1; i++){
    let nieuwtekst = tekst.replace("is", "was");
    console.log(nieuwtekst);
}


