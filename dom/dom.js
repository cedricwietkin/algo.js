const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
const qS = document.querySelectorall();

global.document = dom.window.document;
  // Afficher le titre du document dans la console
  console.log(document.head.title);

  // Modifier le titre du document en "Modifier le DOM"
  document.title = "Modifier le DOM";

 (document.body.main.content)
// Afficher tous les éléments enfants du deuxième élément enfant du <body>
const secondChild = document.body.children[1];
if (secondChild) {
  for (const child of secondChild.children) {
    console.log(child);
  }
} 
 
  // Générer une couleur aléatoire au format RGB
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Changer la couleur d'arrière-plan du body par une couleur aléatoire
  document.body.style.backgroundColor = generateRandomColor();