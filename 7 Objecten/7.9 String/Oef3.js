function verwijderWoord (tekst, woord){
    let deelzinnen = tekst.split(woord);
    deelzinnen = deelzinnen.map(z => z.trim());
    return deelzinnen.join(" ")
}

let zin  = "Dit is een test";
console.log(verwijderWoord(zin, 'een'));