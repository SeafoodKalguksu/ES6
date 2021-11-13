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

            // arrow functions can only be anonymous.
            // They are not bound to any identifier.
            // fly: () => console.log(`${this.name} can't fly!`),
            // undefined can't fly! this means window in browser or global in node.js
        };
        let man = batman;
        batman = null;
        man.fly();
    }
    assignMethodToProperty();

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
declaration();

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
    let object = {
        ['key' + ++number]: number, // key1: 1
        ['key' + ++number]: number, // key2: 2
        ['key' + ++number]: number, // key3: 3
    };
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
