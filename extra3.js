
const readlineSync = require("readline-sync");
function findDivisors(n) {
    const divisors = [];
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        divisors.push(i);
      }
    }
  
    return divisors;
  }
  
  const n = readlineSync.question("Enter a number: ");
  const d = findDivisors(parseInt(n));


  console.log("Divisors:", d);
  
  class Divisors {
    constructor(n) {
      this.number = n;
    }
  
    findDivisors() {
      const d = [];
  
      for (let i = 2; i < this.number; i++) {
        if (this.number % i === 0) {
          d.push(i);
        }
      }
  
      return d;
    }
  }
  
  const number = readlineSync.question("Enter a positive integer: ");
  const divisorsObj = new Divisors(parseInt(number));
  const divisors = divisorsObj.findDivisors();
  console.log("Divisors:", divisors);