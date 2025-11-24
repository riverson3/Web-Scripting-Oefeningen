function add(){
    let input = document.querySelector('#to-do-item');
    let item = input.value;

    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.appendChild(div);
}