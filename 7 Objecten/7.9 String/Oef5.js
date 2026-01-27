function genereerWillekeurigGetal(min, max){
    let gem = max - min
    let willekeurig = Math.random()* gem +min;
    return Math.round(willekeurig);
}

console.log(genereerWillekeurigGetal(5,10));