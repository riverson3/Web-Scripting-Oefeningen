const prompt = require("prompt-sync")();

let jaar = prompt("Geef een jaar in: ");
let maand = prompt("Geef een maand in: ");

if(maand == 2){
    if(jaar %4 == 0 && jaar %100 == !0 || jaar %400 == 0){
        console.log("Februari in een schrikeljaar");
    } else{
        console.log("Februari in een normaal jaar");
    }
}
else{
    console.log("Geen februari");
}
