// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The for...in statement iterates over all enumerable properties of an object
// that are keyed by strings (ignoring ones keyed by Symbols), including
// inherited enumerable properties.
// for (key in object) {
//     statement
//   }
// key: the key of each property of the object on each iteration.
// object: Object whose non-Symbol enumerable properties are iterated over.
function forIn() {
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}

// The for...of statement creates a loop iterating over iterable objects,
// including: built-in String, Array, array-like objects (e.g., arguments
// or NodeList), TypedArray, Map, Set, and user-defined iterables.
// for (value of iterable) {
//     statement
// }
// value: the value of each distinct property of the object.
// iterable: Object whose iterable properties are iterated.
function forOf() {
    const iterable = [3, 5, 7];
    iterable.foo = 'hello';

    for (const value of iterable) {
        console.log(`value of iterable = ${value}`); // logs "3", "5", "7"
        // {foo: 'hello'} is not value of iterable. logs 3, 5, 7
    }

    for (const key in iterable) {
        if (iterable.hasOwnProperty(key)) {
            console.log(`key of iterable = ${key}`); // logs "0", "1", "2", "foo"
        }
    }
}
