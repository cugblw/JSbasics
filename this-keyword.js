/* var car = {
    maeke: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () { 
        console.log(this.maeke + " " + this.getPrice());
    }
}

car.printDescription(); */

/* function first() {
    return this;
}

console.log(first() === global); */

// this is Node's global object
// because that's where the
// first method was called

/* 
function second() {
    "use strict";
    return this;
}

console.log(second() === global);
console.log(second() === undefined);
 */


// this is dependes on HOW a function is called

// An object can be passed as the first argument to call or apply
// and this will be bound to that object

/* 
let myObject = { value: "myObject" };

// value is set on the global object
global.value = 'Global Object';

function third(name) {
    return this.value + " " + name;
}

console.log(third());
console.log(third.call(myObject, "John"));
console.log(third.apply(myObject, ["John"])); 
*/

function fifth() {
    console.log(this.firstName + " " + this.lastName);
}

let customer1 = {
    firstName: "John",
    lastName: "Doe",
    print: fifth
}

let customer2 = {
    firstName: "Mary",
    lastName: "Jane",
    print: fifth
}

customer1.print();
customer2.print();