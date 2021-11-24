// Generator
// The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
// function*
// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
function* generator() {
    try {
        yield 1; // value = 1
        yield 2; // value = 2
        yield 3; // value = 3
        return 'finish'; // 'finish' is the last value.
    } catch (error) {
        console.log(error);
    }

    // Return a Generator object. ***DO NOT RETURN 'finish'***.
    const myGenerator = generator();
}

// Generator.prototype.next(value)
// The next() returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator.
// Parameters
// value
// The value to send to the generator.
// The value will be assigned as a result of a yield expression.
// Return value: an Object with two properties:
// done (boolean)
// Has the value true if the iterator is past the end of the iterated sequence.
// Has the value false if the iterator was able to produce the next value in the sequence.
// value
// Any JavaScript value returned by the iterator. Can be omitted when done is true.
function generatorNext() {
    console.log(myGenerator.next()); // {value: 1, done: false}
    console.log(myGenerator.next()); // {value: 2, done: false}
    console.log(myGenerator.next()); // {value: 3, done: false}
    console.log(myGenerator.next()); // {value: 'finished', done: true}
}

// Generator.prototype.return(value)
// The return() method returns the given value and finishes the generator.
function generatorReturn() {
    myGenerator.next(); // { value: 1, done: false }
    myGenerator.return('foo'); // { value: "foo", done: true }
    myGenerator.next(); // { value: undefined, done: true }
}

// Generator.prototype.throw(exception)
// The throw() method resumes the execution of a generator by throwing an error into it and returns an object with two properties done and value.
function generatorThrow(params) {
    console.log(myGenerator.next());
    myGenerator.throw(new Error('error...'));
    console.log(myGenerator.next());
}
