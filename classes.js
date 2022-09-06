//declaration
class Car{
    constructor(make, model, year) { 
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() { 
        console.log(`${this.make}, ${this.model}, (${this.year})`);
    }

}

// expression
// let car = class { 
// }

console.log(typeof Car);

let myCar = new Car('Ford', 'Mustang', 2015);
// console.log(myCar);
// console.log(typeof myCar);
myCar.print();

class SportsCar extends Car {
    revEngine() { 
        console.log('Vrooom goes the ' + this.model);
    }
}

let mySportsCar = new SportsCar('Porsche', '911', 2017);
mySportsCar.print();
mySportsCar.revEngine();

// myCar.revEngine();