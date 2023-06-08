const readlineSync = require("readline-sync");
/*
var age = readlineSync.question("Quelle est votre age? : ");
if (age>= 18)  {
  console.log("You are an adult");
} else {
  console.log("You are not yet an adult");
}
 var minAge =readlineSync.question("donnez un nombre: ");
 var maxAge =readlineSync.question("donnez un deuxieme nombre: ");
 var currentage =readlineSync.question("quel est votre age? :");

 if ((currentage>= minAge && currentage <= maxAge)){
 console.log(currentage);
 }
 if (minAge > maxAge) {
    console.log("Erreur : L'âge minimum ne peut pas être supérieur à l'âge maximum.");
   process.exit(1); // Quitte le programme avec un code d'erreur
  }

*/

/*let i = 1;

while (i <= 10) {
  console.log(i);
  i += 1;
}

for (let i = 5; i <= 10; i += 1) {
    console.log(i);
  }*/
  /*var i = 1;

  while (i <= 100) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
  for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  var nombreDeBoucles = 50;

for (var i = 1; i <= nombreDeBoucles; i++) {
  var nombrePair = 2 * i;
  console.log(nombrePair);
}*/

/*for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      var division = i / 2;
      console.log(division);
    } else {
      var multiplication = i * 3;
      console.log(multiplication);
    }
  }*/
  /*while (true) {
    var numeroPrefere = readlineSync.question("Quel est votre numero prefere? : ");
  
    if (numeroPrefere == 42) {
      console.log("Excellent choix !");
      break;
    } else {
      console.log("Etes-vous sûr ? Essayez encore.");
    }
  }
*/
  var nombre = readlineSync.question("Entrez un nombre entre 1 et 7 : ");

switch (Number(nombre)) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  case 7:
    console.log("Dimanche");
    break;
  default:
    console.log("Nombre invalide. Veuillez entrer un nombre entre 1 et 7.");
    break;
}