let getallen = [2,5,9,6,5];


function DoubbeleVerwijderen(getallen){
    let nieuweGetallen = [];

    getallen.forEach(x => {
        if(nieuweGetallen.indexOf(x)== -1){
        nieuweGetallen.push(x);
        }
    });

    return nieuweGetallen;
}

let nieuwe = DoubbeleVerwijderen(getallen);
console.log(nieuwe);
