const readlineSync = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 100) + 1; //donne un nombre aléatoire 

while (true) {
  var number = parseInt(readlineSync.question("Guess the number: ")); //demande à l'utilisateur de donner un nombre

  if (number === randomNumber) { //si le chifffre donner est le même que celui choisi par le programme = win
    console.log("WIN!");
    break;
  } else if (number < randomNumber) { // si le nombre est plus petit= too low
    console.log("Too low");
  } else {
    console.log("Too high"); //sinon il serait emis = too high
  }
}