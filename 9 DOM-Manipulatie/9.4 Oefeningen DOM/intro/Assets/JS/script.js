 
let list = document.createElement('ul');
let listItem = document.createElement('li');
listItem.innerHTML = "Banaan";

list.appendChild(listItem);
document.body.appendChild(list);


// element verwijderen
let eersteParagraaf = document.querySelector('#eerste-par');
let vervangingParagraaf = document.createElement('p');
vervangingParagraaf.innerHTML = 'vervangende paragraaf';
eersteParagraaf.parentNode.replaceChild(vervangingParagraaf, eersteParagraaf);

// stijl aanpassen
let header = document.querySelector('h1');
header.style.background = "#ddd"
header.style.textDecoration = "underline";

//attributen aanpassen
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.carrefour.be');
