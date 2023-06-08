const readlineSync = require("readline-sync");
let color = "red" ;
console.log(color);
let name = "Gerard";
let surname = "Lambert";
let city = "Paris";
console.log("Your name is " + name +" "+ surname + " and you lived in "+ city );
let Name = readlineSync.question("What's your name?");
let surName = readlineSync.question("What's your surname?");
let cities = readlineSync.question("Where do you from?");
console.log("My name is " + Name +" "+ surName + " and i lived in "+ cities );
// Demande à l'utilisateur deux nombres
var nombre1 = readlineSync.question("Entrez le premier nombre avec une partie decimale :");
var nombre2 = readlineSync.question("Entrez le deuxième nombre avec une partie decimale :");

// Conserve uniquement la partie entière du premier nombre
var partieEntiere =parseInt(nombre1);

// Multiplie les deux nombres
var resultat = partieEntiere * nombre2;

// Affiche le résultat
console.log("Le résultat de la multiplication est : " + resultat);


var nombre1 = readlineSync.question("Entrez un nombre entier: ")
var nombbre2 = readlineSync.question("Entrez un second nombre entier: ")

 // Convertit les nombres en entiers
    nombre1 = parseInt(nombre1);
    nombre2 = parseInt(nombre2);

    // Calcule le reste de la division entière
    const reste = nombre1 % nombre2;

    // Affiche le résultat
    console.log('Le reste de la division entière est : ' + reste);

