function convertToCm(){
    let getal = document.querySelector('#textInput');
    let item = getal.value;
    let omgezet = item * 2.54;

    let resultaat = document.querySelector('#result');
    resultaat.innerHTML = omgezet;
}

function convertToInch(){
    let getal = document.querySelector('#textInput');
    let item = getal.value;
    let omgezet = item / 2.54;

    let res = document.querySelector('#result');
    res.innerHTML = omgezet;
}