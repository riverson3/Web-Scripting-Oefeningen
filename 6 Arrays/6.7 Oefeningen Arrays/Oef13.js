let array = [10, 15, 60, 84, 78]

let even = array.find(evennumber);

function evennumber(number){
    return number %2 == 0
}

console.log(even)