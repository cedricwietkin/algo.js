const readlineSync = require("readline-sync");
const fs = require("fs");

const menu = `
Bonjour ! Bienvenue dans le gestionnaire de saveurs de pizzas.

Veuillez choisir vos actions :

1 - Lister toutes les saveurs de pizzas
2 - Ajouter une nouvelle saveur de pizza
3 - Supprimer une saveur de pizza
4 - Quitter ce programme

Saisissez le numéro de votre action :`;

function displayMenu() {
  console.log(menu);
}

function listFlavors() {
  const flavors = loadFlavors();
  if (flavors.length === 0) {
    console.log("Il n'y a aucune saveur de pizza enregistrée.");
  } else {
    console.log("Liste de toutes les saveurs de pizzas :");
    flavors.forEach((flavor, index) => {
      console.log(`${index + 1}. ${flavor}`);
    });
  }
}

function addFlavor() {
  const flavor = readlineSync.question("Entrez la nouvelle saveur de pizza : ");
  const flavors = loadFlavors();
  flavors.push(flavor);
  saveFlavors(flavors);
  console.log(`La saveur de pizza "${flavor}" a été ajoutée avec succès.`);
}

function removeFlavor() {
  const flavors = loadFlavors();
  if (flavors.length === 0) {
    console.log("Il n'y a aucune saveur de pizza enregistrée pour la supprimer.");
  } else {
    console.log("Liste de toutes les saveurs de pizzas :");
    flavors.forEach((flavor, index) => {
      console.log(`${index + 1}. ${flavor}`);
    });
    const flavorIndex = readlineSync.question("Entrez le numéro de la saveur de pizza à supprimer : ");
    if (flavorIndex >= 1 && flavorIndex <= flavors.length) {
      const removedFlavor = flavors.splice(flavorIndex - 1, 1);
      saveFlavors(flavors);
      console.log(`La saveur de pizza "${removedFlavor}" a été supprimée avec succès.`);
    } else {
      console.log("Numéro de saveur de pizza invalide.");
    }
  }
}

function saveFlavors(flavors) {
  fs.writeFileSync("flavors.json", JSON.stringify(flavors));
}

function loadFlavors() {
  try {
    const data = fs.readFileSync("flavors.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function main() {
  let choiceCount = 0;
  displayMenu();
  

  while (true) {
    const choice = readlineSync.question("Votre choix : ");
    console.log();

    switch (choice) {
      case "1":
        listFlavors();
        break;
      case "2":
        addFlavor();
        break;
      case "3":
        removeFlavor();
        break;
      case "4":
        console.log("Au revoir !");
        return;
      default:
        console.log("Choix invalide. Veuillez réessayer.");
    }
    choiceCount++; // Incrémenter le compteur après chaque choix

    if (choiceCount === 10) {
      console.log("Vous avez effectué 10 choix. Faites une pause.");
      break; // Sortir de la boucle
    }

    console.log();
    displayMenu();

  }
}

main();
