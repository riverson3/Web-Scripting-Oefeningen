function maakTeller(){
    let count=0
    return function(){
        count ++;
        return count;
    }
}
let mijnteller = maakTeller();
console.log(mijnteller());