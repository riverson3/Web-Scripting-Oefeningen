let numb1 = [0, 1, 2, 3]
let numb2 = [4, 5, 6, 7]

function combineerEnManipuleer(numb1, numb2){
    let combi = numb1.concat(numb2)
    combi.push(8);
    combi.unshift(-1);
    combi.sort(function (a,b){return b- a});

    return combi
}

let gecombineerd = combineerEnManipuleer(numb1, numb2);
console.log(gecombineerd)