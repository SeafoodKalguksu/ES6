function declaration() {
    let o = {};
    let o = { a: 'foo', b: 42, c: {} };

    function shorterNotation() {
        const name = 'Seafood Kalguksu';
        const price = '9,000 KRW';

        const favoriteFood = {
            name, // name: name
            price, // price: price
            country: 'Korea',
        };
        console.log(favoriteFood);
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
