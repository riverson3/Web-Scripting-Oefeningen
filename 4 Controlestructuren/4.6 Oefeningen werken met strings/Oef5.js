let prompt = require("prompt-sync")();

let tekst = prompt("geef een scheldwoord in: ");

if(tekst.includes("kanker") || tekst.includes("neger") || tekst.includes("hoerezoon")){
    console.log("Dit is ongepast en niet professioneel");
}
else{
    console.log("Dit is gepast");
}