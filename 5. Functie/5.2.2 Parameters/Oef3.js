let korting=0;
function berkenkorting(prijs,kortingsgroep,aantal){
    switch(kortingsgroep){
        case "a":
            korting = 0.1;
            break;
        case "b":
            korting = 0.2;
            break;
        default:
            console.log("Geef de correcte kortingsgroep in.");
    }
    console.log("De totaalprijs na " +  korting*100 + "% korting is " + ((prijs* aantal) - (prijs*aantal*korting)) + " euro");
}

berkenkorting(500, "a", 5);