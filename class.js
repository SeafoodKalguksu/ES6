// new operator
// The new operator lets developers create an instance of a user-defined object
// type or of one of the built-in object types that has a constructor function.
function newOperator() {
    function Dog() {
        this.eatFood = 'NomNomNom';
        this.eat = () => console.log(this.eatFood);
    }

    let maddie = new Dog();
    console.log(maddie instanceof Dog); // True
    maddie.eat(); //NomNomNom
}

// Creating an instance
function createInstance() {
    // Using a constructor function, ES5 style
    function es5() {
        function Fruit(name, price) {
            this.name = name;
            this.price = price;
            this.show = () =>
                console.log(`name = ${this.name}, price = ${this.price}`);
        }

        // 'new' makes a new instance of the Fruit() and return the instance to variables.
        fruit1 = new Fruit('Kiwi', 1000);
        fruit2 = new Fruit('Orange', 2000);
        console.log(fruit1); // Fruit { name: 'Kiwi', price: 1000, show: [Function ()] }
        console.log(fruit2); // Fruit { name: 'Orange', price: 2000, show: [Function ()] }

        // Fruit() without 'new' means that is just calling Fruit().
        fruit3 = Fruit('Cherry', 3000); // return nothing to fruit3
        console.log(fruit3); // undefined

        let number = 0;
        for (const key in fruit1) {
            console.log(`key_${++number} = ${key}`);
        }
    }

    // Using class, ES6++ style
    function es6() {
        class Fruit {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }

            showName() {
                console.log(this.name);
            }
        }

        const favoriteFruit = new Fruit('mango', 1500);
        let number = 0;

        // object's methods belong to property of object
        // class's methods belong to Prototype object of class
        for (const key in favoriteFruit) {
            console.log(`key_${++number} = ${key}`);
        }
    }
}

class Car {
    constructor(color, door) {
        this.color = color;
        this.door = door;
        this.wheel = 4;
    }

    start() {
        console.log('start the engine!');
    }

    stop() {
        console.log('stop the engine!');
    }
}

function inheritance() {
    // ES6+ style
    class Benz extends Car {
        park() {
            console.log('park the car!');
        }
    }

    const e300 = new Benz('white', 4);
}

function overriding() {
    class Bmw extends Car {
        constructor(color, door) {
            // Must call constructor() of super class before assigning values to properties of sub class
            super(color, door);
            this.offroad = false;
        }
        stop() {
            super.stop();
            console.log('breaking!');
        }
    }

    const z4 = new Bmw('red', 2);
    z4.stop();
}
