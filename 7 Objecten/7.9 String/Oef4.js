function rondVierkantswortel(getal){
    let result = Math.sqrt(getal);
    result = Math.round(result *100);
    result /= 100;
    return result;
}

console.log(rondVierkantswortel(8))