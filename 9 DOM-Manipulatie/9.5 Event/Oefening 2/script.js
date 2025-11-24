let count = 0;
function countUp(){
    count++;
    updateCount();
}

function countDown(){
    count--;
    updateCount();
}

function reset(){
    count = 0;
    updateCount();
}

function updateCount(){
    let counter = document.querySelector('#counter');
    counter.innerHTML = count;
}