let array = [15, 20, 36, 43]

let res = array.filter(filterComplex)

function filterComplex(number){
    return (number > 10) && (number %2 == 0)
}

console.log(res)