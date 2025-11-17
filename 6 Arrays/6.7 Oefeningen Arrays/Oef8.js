function telDeElementen(...getallen){
    let som = 0;
    for(let number of getallen){
        som += number;
    }
    return som;
}

console.log(telDeElementen(1,2,3,4,5));

