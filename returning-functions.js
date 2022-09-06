/* function one() {
    return'one';
}
 */

// let value = one;
// // console.log(value);
// // console.log(one());

// let value = one;
// console.log(typeof value);

/*
function two() {
    return function () {
        console.log('two');
    }
}

let myFunction = two();
myFunction();
*/

function three() {
    return function () {
        return 'three';
    }
}

console.log(three()());