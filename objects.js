const readlineSync = require("readline-sync");
/*
let myidentite={
    "firstname": "Gerard",
    "lastname": "Lambert",
    "age": 42,
    "skills": [
      {
        "skillName": "JavaScript",
        "level": "advanced"
      },
      {
        "skillName": "HTML",
        "level": "advanced"
      }
    ],
    "address": {
      "street": "rue des Campanules",
      "number": "10",
      "city": "Paris",
      "zip": 1000
    }
  }
  console.log(myidentite)
  */
/*
  function askTvSerie() {
    const serie = {};
  
    serie.name = readlineSync.question("Nom de la série télévisée : ");
    serie.year = readlineSync.question("Année de production : ");
  
    serie.actors = [];
    let addActors = true;
  
    while (addActors) {
      const actor = readlineSync.question("Nom d'un acteur (ou appuyez sur Entrée pour terminer) : ");
  
      if (actor.trim() !== '') {
        serie.actors.push(actor);
      } else {
        addActors = false;
      }
    }
  
    return serie;
  }
  
  const tvSerie = askTvSerie();
  const tvSerieJSON = JSON.stringify(tvSerie, null, 2);
  
  console.log("Série télévisée préférée :");
  console.log(tvSerieJSON);*/

 

  function askTvSerie() {
    const serie = {};
  
    serie.name = readlineSync.question("Nom de la serie televisee : ");
    serie.year = readlineSync.question("Année de production : ");
  
    serie.actors = [];
    let addActors = true;
  
    while (addActors) {
      const actor = readlineSync.question("Nom d'un acteur (ou appuyez sur Entree pour terminer) : ");
  
      if (actor.trim() !== '') {
        serie.actors.push(actor);
      } else {
        addActors = false;
      }
    }
  
    return serie;
  }
  
  

  function randomizeCast(tvSerie) {
    const randomizedCast = [...tvSerie.actors];
    for (let i = randomizedCast.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedCast[i], randomizedCast[j]] = [randomizedCast[j], randomizedCast[i]];
    }
    return randomizedCast;
  }

  // Interroger l'utilisateur sur une série télévisée
  const tvSerie = askTvSerie();
  const tvSerieJSON = JSON.stringify(tvSerie, null, 2);
  
  
  // Obtenir un nouveau casting aléatoire
  const randomizedCast = randomizeCast(tvSerie);
  
  // Afficher la série télévisée et le nouveau casting
  console.log("Série télévisée :", tvSerie);
  console.log("Nouveau casting :", randomizedCast);