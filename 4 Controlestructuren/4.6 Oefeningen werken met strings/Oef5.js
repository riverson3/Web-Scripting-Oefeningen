let prompt = require("prompt-sync")();

let tekst = prompt("geef een tekst in: ");
let scheldwoord = prompt("geef een scheldwoord in: ");

if(tekst.includes(scheldwoord)){
    console.log("Dit is ongepast en niet professioneel");
}
else{
    console.log("Dit is gepast");
}