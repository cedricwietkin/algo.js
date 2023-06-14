

const qS = document.querySelector('a')
console.log(qS.href) // "homepage.html"
console.log(qS.innerText) // "link"

const qSA = document.querySelectorAll('a')
console.log(qSA) // [ ... ]
console.log(qSA[0].innerText) // "link"
console.log(qSA[1].id) // "bold"