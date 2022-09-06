/* var count = 3;
if (count === 4) {
    console.log("count is 4");
} else if(count > 4){
    console.log("count is greater than 4");
} else if(count < 4){
    console.log("count is less than 4");
}
else {
    console.log("count is not 4");
} */

/* 
let hero = 'Superman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log("super strength");
        console.log("x-ray vision");
        break;
    case 'batman':
        console.log("intelligence");
        console.log("fighting skills");
        break;
    default:
        console.log("member of JLA");
}
*/

// ternary operator
let a = 1, b = '1';
// let result = (a == b) ? 'equal' : 'not equal';
// let result = (a === b) ? 'equal' : 'not equal';
// let result = (a !== b) ? 'not equal' : 'equal';
let result = (a != b) ? 'not equal' : 'equal';
console.log(result);