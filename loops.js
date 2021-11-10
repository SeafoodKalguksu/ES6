// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

function for_in() {
    // for...in
    // for (perperty in object) {
    //     statement
    // }
    // The for...in statement iterates over all enumerable properties of an object
    // that are keyed by strings (ignoring ones keyed by Symbols), including
    // inherited enumerable properties.
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}

function for_of() {
    // for...of
    // for (value of iterable) {
    //     statement
    // }
    // The for...of statement creates a loop iterating over iterable objects,
    // including: built-in String, Array, array-like objects (e.g., arguments
    // or NodeList), TypedArray, Map, Set, and user-defined iterables.
    // It invokes a custom iteration hook with statements to be executed for
    // the value of each distinct property of the object.
    const iterable = [3, 5, 7];
    iterable.foo = 'hello';

    for (const value of iterable) {
        console.log(`value of iterable = ${value}`); // logs "0", "1", "2", "foo"
        // {foo: 'hello'} is not value of iterable. logs 3, 5, 7
    }

    for (const property in iterable) {
        if (iterable.hasOwnProperty(property)) {
            console.log(`property of iterable = ${property}`); // logs "0", "1", "2", "foo"
        }
    }
}
