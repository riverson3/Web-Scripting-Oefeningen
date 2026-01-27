//zorgen dat prompt werkt
const prompt = require("prompt-sync")();

//zorgen dat localstorage werkt
if(typeof localStorage === "undefined" || localStorage === null){
    let LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

//Bankaccount uit localstorage halen
let bankJson = localStorage.getItem('bankAccount')

//Bankaccount JSON omzetten naar object
let bankAccount = JSON.parse(bankJson);

//hoofdprogramma
console.log("Current balance: " + bankAccount.balance);

let amount;
let action = prompt("would you like to deposit (d) or withdraw (w)? ");

if(action == 'w'){
    amount = Number(prompt("How much would you like to withdraw? "));
    if(amount <= bankAccount.balance){
        bankAccount.balance -= amount;
    }
    else{
        console.log("insufficient balance");
    }
}
else if(action == "d"){
    amount = Number(prompt("How much would you like to deposit? "));
    bankAccount.balance += amount;
}
else{
    console.log("enter a 'd' to deposit or a 'w' to withdraw.");
}

console.log('your balance: ' + bankAccount.balance);

//bankaccount terug opslaan in localstorage
bankJson = JSON.stringify(bankAccount)
localStorage.setItem("bankAccount", bankJson);
