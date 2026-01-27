let persoon = {
    voornaam: 'john',
    naam: 'Pork',
    leeftijd: 30,
    beroep: 'vee',
    adres: {
        straat: 'kerkstraat 12',
        stad: 'Maasmechelen',
        postcode: '3610'
    }
};

persoon.naam = 'Johnson';
console.log(persoon.naam);