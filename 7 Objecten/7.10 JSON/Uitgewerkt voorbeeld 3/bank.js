const prompt = require('prompt-sync')();


// local storage bruikbaar maken via var
if(typeof localStorage === "undefined" || localStorage === null){
    let LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

// bankAccount aanmaken
let bankAccount ={
    balance: 0
};

// controleren of er al een bankAccount in de localstorage zit
let savedBankAccount = localStorage.getItem("bankAccount");
if (savedBankAccount){ // controleren of er iets in savedBankAccount
    bankAccount = JSON.parse(savedBankAccount);
}

// gebruikerinput vragen en bankaccount aanpassen
console.log("your current balance is: €" + bankAccount.balance);
const action = prompt("do you want to deposit (d) or withdraw (w)");
if(action == "d"){
    bankAccount.balance += 100;
}
else if(action == "w"){
    bankAccount.balance -= 100;
}
else{
    console.log("enter a 'd' to deposit or a 'w' to withdraw.")
}
console.log("your new balance is: €" + bankAccount.balance);

// bankaccount omzetten naar json
let bankJson = JSON.stringify(bankAccount);
//bankJSON opslaan in localstorage
localStorage.setItem("bankAccount", bankJson);