let getallen = [1, 2, 3, 4]

function verdubbel(getallen){
    let verdubbeld = getallen.map(getal =>{
        return getal *2;
    });

    return verdubbeld;
}

let verdubbeldeGetallen = verdubbel(getallen);
console.log(verdubbeldeGetallen);