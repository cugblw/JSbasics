/* 
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
console.log(typeof car);

let anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever); 
*/

/* 
var a = {
    myProperty: {
        b:'hi'
    }
}

console.log(a.myProperty.b);
*/
/* 
var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ]
};

console.log(c.myProperty[3].g);
*/

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' },
];

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [('123-456-7890'), ('123-456-7891')] },
        { firstName: 'Sally', lastName: 'Tabor', phoneNumbers: [('123-456-7890'), ('123-456-7891')] },
    ],
    employees: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [('123-456-7890'), ('123-456-7891')] },
        { firstName: 'Sally', lastName: 'Tabor', phoneNumbers: [('123-456-7890'), ('123-456-7891')] },
        { firstName: 'Sally', lastName: 'Tabor', phoneNumbers: [('123-456-7890'), ('123-456-7891')] },
    ]
}

console.log(typeof carLot)