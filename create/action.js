/*
// Liste des noms des apprenants
const apprenants = [
    "Tim",
    "Pauline",
    "Steeve",
    "Sam",
    "Camille",
    "Abdoulaye",
    "Ilias",
    "Lucie",
    "Youssef",
    "Rui",
    "Marius",
    "Corentin",
    "Jason",
    "Nathan",
    "Robin",
    "Nicolas",
    "Pietro",
    "Manon",
    "bathseeba",
    "Adeline",
    "Clara",
    "Sarah",
    "Jérôme",
    "Cédric",
    "Ozlem",

  ];
  
  // Générer une couleur de fond aléatoire
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Vérifier si une couleur est sombre ou claire
  function isColorDark(color) {
    const rgb = color.substring(4, color.length - 1)
                    .replace(/ /g, '')
                    .split(',');
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness < 128;
  }
  
  // Mélanger l'ordre des apprenants
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Sélectionner l'élément <article>
  const article = document.querySelector("article");
  
  // Mélanger l'ordre des apprenants
  const shuffledApprenants = shuffleArray(apprenants);
  
  // Créer une nouvelle section pour chaque apprenant
  shuffledApprenants.forEach((apprenant) => {
    // Créer la section
    const section = document.createElement("section");
  
    // Générer une couleur de fond aléatoire
    const backgroundColor = generateRandomColor();
  
    // Appliquer la couleur de fond à la section
    section.style.backgroundColor = backgroundColor;
  
    // Vérifier si la couleur de fond est sombre ou claire
    const textColor = isColorDark(backgroundColor) ? "white" : "black";
  
    // Appliquer la couleur de texte à la section
    section.style.color = textColor;
  
    // Créer le paragraphe avec le nom de l'apprenant
    const paragraph = document.createElement("p");
    paragraph.textContent = apprenant;
  
    // Ajouter le paragraphe à la section
    section.appendChild(paragraph);
  
    // Ajouter la section à l'article
    article.appendChild(section);
  });*/ 

  let names = ["Julien","Adeline","Bathsheba","Camille","Cedric","Clara","Corentin","Ilias","Jason","Jérôme","Lucie","Manon","Marius","Nicolas",
    "Ozlem","Pauline","Pietro","Robin","Rui","Sam","Sarah","Steeve","Tim","Youssef"];

let section = document.createElement("section");

for (let name of names){
    let paragraph = document.createElement('p');
    paragraph.innerText = name;
    let color = randomColor();
    paragraph.style.backgroundColor = color;
    console.log(color);

    if(isTooDark(color)){
        paragraph.style.color = "white";
    }else{
        paragraph.style.color = "black";
    }

    section.appendChild(paragraph);
}

document.getElementsByTagName("article")[0].appendChild(section);


RandomizeNames();

function RandomizeNames(){
    let fragment = document.createDocumentFragment();
    while (section.children.length > 0) {
        let index = Math.floor(Math.random() * section.children.length);
        fragment.appendChild(section.children[index]);
    }
    section.appendChild(fragment);
}



function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function isTooDark(hexcolor){
    let r = parseInt(hexcolor.substring(1,3),16);
    let g = parseInt(hexcolor.substring(3,5),16);
    let b = parseInt(hexcolor.substring(5,7),16);
    let lum = ((r*299)+(g*587)+(b*114))/1000;

    return lum < 125;
}