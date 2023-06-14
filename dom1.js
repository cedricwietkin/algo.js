const readlineSync = require("readline-sync");

const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

global.document = dom.window.document;

const qS = document.querySelector('p#strong')

console.log(qS.innerText) // "another link"