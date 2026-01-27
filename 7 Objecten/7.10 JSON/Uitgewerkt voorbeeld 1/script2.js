let autoJson = '{"model":"auris","merk":"Toyota","bouwjaar":"2016"}';

let auto = JSON.parse(autoJson);
console.log('simon rijdt met een ' + auto.merk + " " + auto.model);