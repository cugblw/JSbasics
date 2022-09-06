/* let hi = () => { 
    console.log('hi');
}

hi(); */

/* let hi = (name) => {
    console.log(`hi ${name}`);
}
hi('bob');

((name) => {console.log(`howdy ${name}`)})('bob'); */

/* 
let add = (a, b) => { return a + b };
console.log(add(1, 2)); */

/* let names = ['david', 'eddie', 'alex', 'michael'];
names.map((name) => {console.log(`howdy ${name}`)}); */

/* let names = ['david', 'eddie', 'alex', 'michael'];
let i = 0;
names.map((name) => { i++;  console.log(`howdy ${name} ${i}!`)}); */

let names = ['david', 'eddie', 'alex', 'michael'];
var transformed = names.map((name) => { return `howdy ${name}!` });
console.log(transformed);