const readlineSync = require("readline-sync");

function fibonacci(number) {
  const sequence = [0, 1];

  for (let i = 2; i < number; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

const number = readlineSync.question("Enter a number: ");
const result = fibonacci(parseInt(number));
console.log(result);