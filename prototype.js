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

function prototypeChain() {
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
