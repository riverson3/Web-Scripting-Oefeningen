let persoon = {
    voornaam: 'john',
    naam: 'Pork',
    volledigeNaam: function(){
        return this.voornaam + " " + this.naam;
    }
};

console.log(persoon.volledigeNaam());