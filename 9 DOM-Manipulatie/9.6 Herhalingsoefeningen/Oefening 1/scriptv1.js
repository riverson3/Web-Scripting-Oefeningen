let names = ["Ava", "Liam", "Noah", "Emma", "Olivia", "Mason", "Sophia", "Lucas", 
    "Isabella", "Ethan", "Mia", "James", "Charlotte", "Benjamin", "Amelia", 
    "Henry", "Harper", "Alexander", "Evelyn", "Samuel"];


    
/* 
Zorg voor een degelijke opmaak van de pagina en de navigatiebalk in CSS.

Creeër een methode die elke naam uit bovenstaande
lijst aan in <div> toevoegt, deze wat opmaak geeft, en hem daarna
toevoegt aan <main>
*/

names.forEach(x =>{
    let div = document.createElement('div');
    div.innerHTML = x;
    let main = document.querySelector('main');
    main.appendChild(div);
    div.setAttribute('class', 'namen');
})



/*Tip voor de opmaak: Voeg opmaak toe aan een klasse in CSS.
Voeg in bovenstaande methode een stukje toe waar je deze klasse
toevoegt aan de <div>.
*/