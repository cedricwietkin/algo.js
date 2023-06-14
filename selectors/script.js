/*
*/

let important = document.getElementsByClassName("important");

for (let val of important){
    val.title = "This is an important item";
}

let images = document.getElementsByTagName("img");
for (let val of images) {
    if (val.className !== "important") {
      val.style.transition = "transform 0.3s ease-in-out";
      val.style.transform = "scale(2.5)";
  
      setTimeout(function() {
        val.style.transform = "scale(1)";
      }, 300);
    }
  }


let para = document.getElementsByTagName("p");

for (let val of para){
    if (val.className !== "" && val.className !== null){
        console.log(val.className + ": " + val.innerText);
    }else{
        console.log(val.innerText);
        val.style.color = randomColor();
    }
}



function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}