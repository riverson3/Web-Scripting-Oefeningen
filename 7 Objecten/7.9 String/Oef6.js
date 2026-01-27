function cosinusregel(zijde1, zijde2, hoek){
    let a = Math.pow(zijde1,2) + Math.pow(zijde2,2) - 2 * zijde1 * zijde2 * Math.cos(hoek);
    return Math.sqrt(a)
}

console.log(cosinusregel(10,20,30));