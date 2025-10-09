let prompt = require("prompt-sync")();

let temperatuur = prompt("wat is de temperatuur: ");

if(temperatuur > 20){
    console.log("het is warm");
}
else{
    console.log("Het is koud");
}