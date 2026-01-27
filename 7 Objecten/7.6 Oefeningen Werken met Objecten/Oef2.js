let persoon={
    naam: 'senne peters',
    leeftijd:'17',
    adres: {
        straat: 'wuytershoefstraat 22A',
        stad: 'dilsen-Stokkem',
        postcode:'3650'
    }
}

toonpersoondetailes(persoon);

function toonpersoondetailes(obj){
    console.log(obj.naam);
    console.log(obj.leeftijd);
    console.log(obj.adres.stad)
}