function splitsInZinnen(tekst){
    let zinnen = tekst.split(".");
    zinnen = zinnen.map(z => z.trim());
    return zinnen
}

splitsInZinnen("dit is een test. er is een pluimveewedstrijd in de sporthal. we krijgen dus geen LO");