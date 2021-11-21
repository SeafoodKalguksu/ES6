function prototypeChain() {
    const car = {
        color: 'white',
        wheels: 4,
        drive() {
            console.log('drive...');
        },
    };

    const luxurySedan = {
        isExpensive: true,
    };

    const benz = {
        color: 'black',
    };

    // Object.prototype.__proto__
    // DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
    luxurySedan.__proto__ = car;

    // If you care about performance you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
    // luxurySedan.prototype = Object.create(car);
    // luxurySedan.prototype = car; //

    benz.__proto__ = luxurySedan;
    console.log(benz); // { color: 'black' } // log benz's own properties only.
    console.log(benz.isExpensive); // accessing prototype's property.

    // Showing all keys including inherited keys from luxurySedan and car objects.
    for (let key in benz) {
        console.log(key);
    }
}

// --------------------------------------------------------------------
// |Constructor of Bmw |                     |Prototype object of Bmw |
// |-------------------|---------------------|------------------------|
// |prototype          | ==================> |                        |
// |-------------------|---------------------|------------------------|
// |                   | <================== | constructor            |
// --------------------------------------------------------------------
//                                                  ⬇️⬇️⬇️(inheritance)
//                                          instance of prototype object
function usingConstructor() {
    const Bmw = function (color) {
        this.color = color;
    };

    // Option 1:
    Bmw.prototype.wheels = 4;
    Bmw.prototype.isExpensive = true;
    Bmw.prototype.drive = function () {
        console.log('drive...');
    };

    // Option 2:
    // Bmw.prototype = {
    //     constructor: Bmw,
    //     wheels: 4,
    //     isExpensive: true,
    //     drive() {
    //         console.log('drive...');
    //     },
    // };

    const x5 = new Bmw('white');
    console.log(x5); // own property only
    console.log(x5.wheels); // accessing the property of the prototype of x5
    x5.drive(); // execute the method of the prototype of x5
    console.log(Bmw.isExpensive); // undefined
    console.log(Bmw.prototype.isExpensive); // true
    // Showing all properties
    for (let key in x5) {
        console.log(key);
    }
}
