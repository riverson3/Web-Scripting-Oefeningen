if(typeof localStorage === "undefined" || localStorage === null){
    let LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let bankAccount = {
    balance: 0
};

let bankJson = JSON.stringify(bankAccount);
localStorage.setItem("bankAccount", bankJson);