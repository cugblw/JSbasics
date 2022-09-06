let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log(`The answer of ${a} and ${b} is ${c}.`);


let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e);