/*
const readlineSync = require("readline-sync");

function sortArrayWithoutSort(arr) {
    var countMap = {};
    var sortedArr = [];
    
    // Créer un compte pour chaque nombre dans le tableau
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (countMap[num]) {
        countMap[num]++;
      } else {
        countMap[num] = 1;
      }
    }
    
    // Construire le tableau trié à partir des objets clé-valeur du compte
    for (var num in countMap) {
      if (countMap.hasOwnProperty(num)) {
        var count = countMap[num];
        
        // Ajouter le nombre 'count' de fois dans le tableau trié
        for (var j = 0; j < count; j++) {
          sortedArr.push(Number(num));
        }
      }
    }
    
    return sortedArr;
  }
  
  // Exemple d'utilisation
  var numbers = [5, 2, 8, 1, 9, 3];
  console.log("Tableau avant le tri : " + numbers);
  var sortedNumbers = sortArrayWithoutSort(numbers);
  console.log("Tableau après le tri : " + sortedNumbers);*/

  const readlineSync = require("readline-sync");

function createNumberArray() {
  const numbers = [];
  const uniqueNumbers = new Set(); // Utilisé pour garantir que les nombres saisis sont uniques

  console.log("Veuillez entrer 6 nombres différents :");

  while (uniqueNumbers.size < 6) {
    const input = readlineSync.question("Nombre #" + (uniqueNumbers.size + 1) + ": ");

    // Vérifier si le nombre est un entier valide
    const number = parseInt(input);
    if (!isNaN(number)) {
      uniqueNumbers.add(number);
    } else {
      console.log("Veuillez entrer un nombre valide.");
    }
  }

  uniqueNumbers.forEach((number) => {
    numbers.push(number);
  });

  return numbers;
}

// Exemple d'utilisation
const numberArray = createNumberArray();
console.log("Tableau créé :", numberArray);