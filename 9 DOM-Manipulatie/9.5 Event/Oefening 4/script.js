function addToCart(item){
    let div = document.querySelector('#cart');
    let div2 = document.createElement('div');
    div2.innerHTML = item;
    div.appendChild(div2);
}

function clearCart(){
    let div = document.querySelectorAll('div');
    div.forEach(a => {
        a.parentNode.removeChild(a);
    });
}
