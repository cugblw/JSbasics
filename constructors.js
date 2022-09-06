/* let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
}; */

// constructor function
/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function printNumber(number) {
    console.log(number);
}

let myCar = new Car('bmw', '745li', 2010);
console.log(myCar);
console.log(typeof myCar);
console.log(typeof Car);

let number = new Number(10);
console.log(number);
printNumber(10); */

function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

//Can't really do anything with this particaular object
//because it's not a function
myFunction();