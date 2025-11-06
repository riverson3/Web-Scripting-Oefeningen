let getal = [1, 2, 3, 5 , 6];

function KeerOm(getal){
    let nieuwe = [];
    for(i = getal.length -1; i >=0; i--){
        nieuwe.push(getal[i]);
    }
    return nieuwe;
}

let omgekeerd = KeerOm(getal);
console.log(omgekeerd);
