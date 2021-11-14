// What is Symbol()
// Symbol is a built-in object whose constructor returns a symbol primitive —
// also called a Symbol value or just a Symbol — that’s guaranteed to be unique.

// Why we need Symbol()
// Symbols are often used to add unique property keys to an object that won’t
// collide with keys any other code might add to the object, and which are
// hidden from any mechanisms other code will typically use to access the object.
// That enables a form of weak encapsulation, or a weak form of information hiding.

function symbolAndDescription() {
    // Symbol(description) creates a new primitive Symbol, you write Symbol()
    // with an optional string as its description:
    const sym1 = Symbol();
    const sym2 = Symbol('foo'); // "foo" is the description of the Symbol().

    // Symbol.prototype.description
    // The read-only description property is a string returning the optional
    // description of Symbol objects.
    function description() {
        console.log(sym1.description); // undefined
        console.log(sym2.description); // foo
    }

    Symbol('foo') == Symbol('foo'); // false
    Symbol('foo') === Symbol('foo'); // false
    // let sym = new Symbol()  // TypeError
}

// Ignoring property keyed by Symbols
function ignore() {
    const id = Symbol('id');
    const user = {
        name: 'Mike',
        age: 30,
        [id]: 'myid',
    }; // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }

    Object.keys(user); // ["name", "age"]
    Object.values(user); // ["Mike", 30]
    Object.entries(user); // [Array(2), Array(2)]
    for (let key in user) {
        console.log(key);
    } // name, age
}

// Symbol.for(key) method searches for existing symbols in a runtime-wide
// symbol registry with the given key and returns it if found. Otherwise a new
// symbol gets created in the global symbol registry with this key.
function globalFor() {
    const symbol1 = Symbol.for('id');
    const symbol2 = Symbol.for('id');
    symbol1 === symbol2 ? console.log('true') : console.log('false');
}

// Symbol.keyFor(sym) method retrieves a shared symbol key from the global
// symbol registry for the given symbol.
function keyFor() {
    const symbol1 = Symbol.for('id');
    let key = Symbol.keyFor(symbol1); // "id"
}
