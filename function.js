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
}

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
