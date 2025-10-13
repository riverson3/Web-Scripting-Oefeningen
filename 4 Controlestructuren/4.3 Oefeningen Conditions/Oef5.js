const prompt = require("prompt-sync")();

let inkomen = prompt("Geef je inkomen in: ");

if(inkomen < 10000){
    console.log(10000);
} 
else if(inkomen >= 10000 && inkomen < 20000){
    console.log(inkomen - inkomen*0.1);
}
else if(inkomen >= 20000 && inkomen < 50000){
    console.log(inkomen - inkomen*0.2);
}
else{
    console.log(inkomen - inkomen*0.3);
}