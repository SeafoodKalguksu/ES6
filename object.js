// An object is a collection of properties, and a property is an association
// between a name (or key) and a value.
// object = {
//      key: value, // property
//      key_1: value_1, ... , key_n: value_n    // property, ... , property,
//      Type of key of property should be string or Symbol.
//      A property's value can be a function, in which case the property is
//      known as a method.
//
// }

function declaration() {
    function basic() {
        let emptyObject = {};
        let object = { a: 'foo', b: 42, c: {} };
    }

    function assignMethodToProperty() {
        let batman = {
            name: 'Bruce Wayne',
            age: 'Unknown',
            // fly: function (parameters) {...}, // ES5 style
            fly() {
                // ES6+ style
                console.log(`${this.name} can't fly!`);
            },
            // fly: () => false, // fly = () => false, // SyntaxError

            // Arrow function should not be used as methods.
            // fly: () => console.log(`${this.name} can't fly!`),
            // undefined can't fly! this means window in browser or global in node.js
        };
        let man = batman;
        batman = null;
        man.fly();
    }

    function shorterNotation() {
        const name = 'Seafood Kalguksu';
        const price = '9,000 KRW';

        const favoriteFood = {
            name, // name: name
            price, // price: price
            country: 'Korea',
        };
    }

    // A property of an object can also refer to a function or a getter or setter method.
    function methodDefinition() {
        let object = {
            // property: function (parameters) {}, // ES5 style
            property(parameters) {}, // ES6+ style
            get property() {},
            set property(value) {},
        };

        // In ES6, There is a way to concisely define properties whose values are generator functions:
        function useGenerator() {
            let object = {
                *generator() {
                    //   ...........
                },
            };
        }
    }
}

function accessingProperties() {
    let object = {
        foo: 'bar',
        age: 42,
        baz: { myProp: 12 },
    };

    object.foo; // "bar"
    object['age']; // 42
    object.baz; // {myProp: 12}
    object.baz.myProp; //12
}

// Starting with ECS6, the object initializer syntax also supports computed
// property names. That allows you to put an expression in brackets []
function computedPropertyNames() {
    let number = 0;
    let key = 'k_';
    let object = {
        [key + ++number]: number,
        [key + ++number]: number,
        [key + ++number]: number,
    }; // { k_1: 1, k_2: 2, k_3: 3 }
}

function spreadProperties() {
    let obj1 = { foo: 'x', x: 42 };
    let obj2 = { foo: 'y', y: 13 };

    let clonedObj = { ...obj1 };
    let referObj = obj1;
    obj1.foo = 'z'; // cloneObj = { foo: 'x', x: 42 }, referObj = { foo: 'z', x: 42 }

    // When using the same name for your properties, the second property will overwrite the first.
    function duplicatePropertyNames() {
        let mergedObj = { ...obj1, ...obj2 }; // mergedObj { foo: "y", x: 42, y: 13 }
    }
}

// Object.assign(target, ...sources)
// The Object.assign() method copies all enumerable own properties from one or
// more source objects to a target object. It returns the modified target object.
function assign() {
    const name = 'Mike';
    const age = 30;
    const user = { name, age };
    const cloneUser = user; // Not clone just reference the 'user' object.
    const user1 = Object.assign(user, { name: 'Tom' }); // Overwrite the "name: 'Mike'".
    const user2 = Object.assign(user, { gender: 'female', name: 'Kate' });
}

const object1 = {
    a: 'some string',
    b: 42,
    c: false,
};

function keysAndValues() {
    // Object.keys(obj)
    // The Object.keys() returns an array of a given object's own enumerable
    // property names, iterated in the same order that a normal loop would.
    keys = () => console.log(Object.keys(object1)); // ["a", "b", "c"]

    // Object.values(obj)
    // The Object.values() returns an array of a given object's own enumerable
    // property values, in the same order as that provided by a for...in loop.
    values = () => console.log(Object.values(object1)); // ["somestring", 42, false]
}

function entriesAndFromEntries() {
    // Object.entries(obj)
    // The Object.entries() returns an array of a given object's own enumerable
    // string-keyed property [key, value] pairs.
    let arr;
    entries = () => {
        for (const [key, value] of Object.entries(object1)) {
            console.log(`key = ${key}, value = ${value}`);
        }
        arr = Object.entries(object1); // [ [ 'a', 'some string' ], [ 'b', 42 ], [ 'c', false ] ]
    };

    // Object.fromEntries(iterable)
    // The Object.fromEntries() method transforms a list of key-value pairs into an object.
    // Return value: a new object whose properties are given by the entries of the iterable.
    fromEntries = () => console.log(Object.fromEntries(arr));
    // { a: 'some string', b: 42, c: false }
}

// Object.create(proto, propertiesObject)
// The Object.create() method creates a new object, using an existing object
// as the prototype of the newly created object.
// Return value: a new object with the specified prototype object and properties.
function create() {
    let dog = {
        eat: function () {
            console.log(this.eatFood);
        },
    };

    let maddie = Object.create(dog);
    console.log(dog.isPrototypeOf(maddie)); //true
    maddie.eatFood = 'NomNomNom';
    maddie.eat(); //NomNomNom

    // Understanding the difference between Object.create() and the new operator.
    function difference() {
        function Dog() {
            this.pupper = 'Pupper';
        }

        Dog.prototype.pupperino = 'Pups.';

        // new operator called the constructor of the Dog.
        let maddie = new Dog();

        // Create() does not call the constructor of the Dog.
        let buddy = Object.create(Dog.prototype);

        //Using Object.create()
        console.log(buddy.pupper); //Output is undefined
        console.log(buddy.pupperino); //Output is Pups.

        //Using New Keyword
        console.log(maddie.pupper); //Output is Pupper
        console.log(maddie.pupperino); //Output is Pups.

        // Notice the output of buddy.pupper is undefined. Even though Object.create()
        // sets its prototype to Dog, buddy does not have access to this.pupper
        // in the constructor. This is due to the important difference that
        // new Dog actually runs constructor code, whereas Object.create will not
        // execute the constructor code.
    }
}
