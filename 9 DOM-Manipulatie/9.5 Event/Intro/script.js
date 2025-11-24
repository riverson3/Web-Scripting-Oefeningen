function changeText(){
    let button = document.querySelector('button');
    button.innerHTML = 'stop clicking me!';
    button.style.backgroundColor = 'pink';
}

//inhoud input toevoegen aan een div, die toevoegen aan body
function addToBoddy(){
    let input = document.querySelector('input');
    let div = document.createElement('div');

    div.innerHTML = input.value;

    document.body.appendChild(div);
}

function removeDiv(){
    let divs = document.querySelectorAll('div');

    //divs.forEach();

    for(let div of divs){
        div.parentNode.removeChild(div);
    }
}