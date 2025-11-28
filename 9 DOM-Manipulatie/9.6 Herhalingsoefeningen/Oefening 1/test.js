let names = ["Ava", "Liam", "Noah", "Emma", "Olivia", "Mason", "Sophia", "Lucas", 
    "Isabella", "Ethan", "Mia", "James", "Charlotte", "Benjamin", "Amelia", 
    "Henry", "Harper", "Alexander", "Evelyn", "Samuel"];


let index = names.indexOf("Ava");
if (index > -1) {
    names.splice(index, 1);
}
console.log(names);