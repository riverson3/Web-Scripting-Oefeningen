let persoon={
    naam: 'senne peters',
    leeftijd:'17',
    adres: {
        straat: 'wuytershoefstraat 22A',
        stad: 'dilsen-Stokkem',
        postcode:'3650'
    },
    introduceer: function(){
        return console.log('hallo mijn naam is ' + this.naam + ' en ik ben ', + this.leeftijd  + ' jaar oud en ik woon in ' + this.adres.stad)
    }
};