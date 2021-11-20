// Function
// Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.

// Function.prototype.call(thisArg, arg1, ... , argN)
// The call() method calls a function with a given this value and arguments provided individually.
// Parameters
// thisArg Optional: the value to use as this when calling func.
function call() {
    const student1 = {
        name: 'Mike',
        year: 'freshman',
        age: 19,
    };

    const student2 = {
        name: 'Tom',
        year: 'senior',
        age: 22,
    };

    function showName() {
        console.log(this.name);
    }

    showName();
    showName.call(student1);
    showName.call(student2);

    // Using the call() method to chain constructors for an object.
    function chainConstructors() {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }

        function Food(name, price) {
            Product.call(this, name, price);
            this.category = 'food';
        }

        function Toy(name, price) {
            Product.call(this, name, price);
            this.category = 'toy';
        }

        const cheese = new Food('Cheda', 5);
        const fun = new Toy('robot', 40);
        console.log(cheese);
        console.log(fun);
    }
}

// Function.prototype.apply(thisArg, argsArray)
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
function apply() {
    // Using apply to append an array to another
    function appendArrayToAnother() {
        const array = [1, 2, 3];
        const elements = ['a', 'b', 'c'];

        array.push.apply(array, elements); // [ 1, 2, 3, 'a', 'b', 'c' ]
        // array.push(...elements);
    }

    // Using apply and built-in functions
    function applyAndBuiltinFunctions() {
        const numbers = [5, 6, 2, 3, 7];
        let max = Math.max.apply(null, numbers);
        // Math.max(value0, value1, ... , valueN)
    }

    // Using apply to chain constructors
    function chainConstructors() {
        Function.prototype.myConstruct = function (aArgs) {
            let oNew = Object.create(this.prototype);
            this.apply(oNew, aArgs);
            return oNew;
        };

        function MyConstructor() {
            for (let nProp = 0; nProp < arguments.length; nProp++) {
                this['property' + nProp] = arguments[nProp];
            }
        }

        let myArray = [4, 'Hello world!', false];
        let myInstance = MyConstructor.myConstruct(myArray);

        console.log(myInstance.property1); // logs 'Hello world!'
        console.log(myInstance instanceof MyConstructor); // logs 'true'
        console.log(myInstance.constructor); // logs 'MyConstructor'
    }
}

function difference() {
    console.log('Max by using call() = ', Math.max.call(null, 3, 10, 1, 6, 4));
    console.log(
        'Max by using apply() = ',
        Math.max.apply(null, [3, 10, 1, 6, 4])
    );
}

// Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
function bind() {
    this.x = 9; // variable 'x'
    var module = {
        x: 81, // module's property's key 'x'
        getX: function () {
            return this.x;
        },
    };

    module.getX(); // 81

    const retrieveX = module.getX; // const retrieveX = () => this.x;
    console.log(retrieveX()); // 9; the function gets invoked at the global scope

    //  Create a new function with 'this' bound to module
    console.log(module.getX.bind(module)());
}
