const readlineSync = require("readline-sync");
//exos 4.1 calcul surface rectangle
/*function calcSurface (a, b)  {
    return a * b;
  }
  
  console.log(calcSurface(4, 10)); 

// exos 4.2 choisir aléatoirement un chiffre compris entre 1et 10
  function rand10() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  function multiRand() {
    var result = [];
    for (var i = 0; i < 5; i++) {
      result.push(rand10());
    }
    return result;
  }
  
  console.log(multiRand());*/

/*
function Sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function Average(arr) {
  const sum = Sum(arr);
  return sum / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function multiRand(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(Math.floor(Math.random() * 100)); // Génère des nombres entiers entre 0 et 99
  }
  return result;
}

let userInput = readlineSync.question("Entrez un nombre : ");
let quantity = parseInt(userInput);

let randomNumbers = multiRand(quantity);
let average = Average(randomNumbers);
let minimum = getMin(randomNumbers);
let maximum = getMax(randomNumbers);

console.log("Nombres aléatoires :", randomNumbers);
console.log("Moyenne :", average);
console.log("Minimum :", minimum);
console.log("Maximum :", maximum);*/
function calcDistance(xA, yA, xB, yB) {
    const deltaX = xB - xA;
    const deltaY = yB - yA;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
  }
  // Coordonnées des points A et B
const xA = 2;
const yA = 3;
const xB = 5;
const yB = 1;

// Calcul de la distance entre les points A et B
const distance = calcDistance(xA, yA, xB, yB);

console.log("Distance entre les points A et B :", distance);

function factorielle(a) {
    if (a === 0) {
      return 1;
    } else {
      return a * factorielle(a - 1);
    }
  }
  const number = 6;
const factorial = factorielle(number);

console.log(`La factorielle de ${number} est :`, factorial);