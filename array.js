const readlineSync = require("readline-sync");


/*const add = arr => arr.reduce((a, b) => a + b, 0);

let arr = [1,2,3,4,5];
let arr2 = [100, 101, 102];
let sum2 = add(arr2)
let sum = add(arr);
console.log(sum);
console.log(sum2);


console.log(sum/arr.length);
console.log(sum2/arr2.length);*/

/*let arr = [1, 2, 3, 4, 5];
arr.push(6,7,8,9,10);
//let newArr = from(arr);
console.log(arr)
console.log(Array.from(arr));*/

let arr =[1, 2, 3, 4, 5];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

let arr2 = [1, 2, 3, 4, 5];
let min = arr2.reduce((a, b) => Math.min(a, b));
let max = arr2.reduce((a, b) => Math.max(a, b));
console.log("Valeur minimale :", min);
console.log("Valeur maximale :", max);
