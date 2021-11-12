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

    let object = {
        property: function (parameters) {},
        get property() {},
        set property(value) {},
    };
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
