let woorden = ["dit", "is", "een", "test"];

function eersteEnLaatste(woorden){
    let eerstewoord = woorden[0];
    let laatseWoord = woorden[woorden.length -1]
    let eerstelaatste = []
    eerstelaatste.push(eerstewoord);
    eerstelaatste.push(laatseWoord);
    return eerstelaatste;
}
let nieuwe = eersteEnLaatste(woorden);
console.log(nieuwe);