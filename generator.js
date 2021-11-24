// Generator
// The Generator object is returned by a generator function and it conforms to both the ***iterable*** protocol and the ***iterator*** protocol.

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

// yield
// The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
function yield() {
    function* foo(index) {
        while (index < 2) {
            yield index;
            index++;
        }
    }

    const iterator = foo(0);
    console.log(iterator.next().value); // expected output: 0
    console.log(iterator.next().value); // expected output: 1

    // yield*
    // The yield* expression is used to delegate to another generator or iterable object.
    function yieldStar() {
        function* gen1() {
            yield 'w';
            yield 'o';
            yield 'r';
            yield 'l';
            yield 'd';
        }

        function* gen2() {
            yield 'Hello';
            yield* gen1();
            yield '!';
        }

        const iterator = gen2();
        console.log(iterator.next().value); // Hello
        console.log(iterator.next().value); // w
        console.log([...iterator]); // [ 'o', 'r', 'l', 'd', '!' ]
    }
}
// The iterator protocol <<***defines a standard way to produce a sequence of values (either finite or infinite)***>>, and potentially a return value when all values have been generated.
// An object is an iterator when it implements a next() method.
// Generator.prototype.next(value)
// The next() returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator.
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

// The iterable protocol
// allows JavaScript objects <<***to define or customize their iteration behavior***>>, such as what values are looped over in a for...of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.
// In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator:
// [Symbol.iterator]	A zero-argument function that returns an object, conforming to the iterator protocol.
// Whenever an object needs to be iterated (such as at the beginning of a for...of loop)
// User-defined iterables
function userDefinedIterable() {
    const myIterable = {
        items: [],
        // Symbol.iterator symbol specifies the default iterator for an object.
        // Used by for...of.
        *[Symbol.iterator]() {
            for (let item of this.items) {
                yield item;
            }
        },
        curIndex: 0,
        next() {
            let done = !(this.curIndex < this.items.length);
            let value = !done ? this.items[this.curIndex++] : undefined;
            return { done, value };
        },
        sum() {
            return this.items.reduce((acc, cur) => acc + cur);
        },
    };

    myIterable.items.push(1);
    myIterable.items.push(2);
    myIterable.items.push(3);
    console.log(myIterable.next()); // { done: false, value: 1 }
    console.log(myIterable.next()); // { done: false, value: 2 }
    console.log(myIterable.next()); // { done: false, value: 3 }
    console.log(myIterable.next()); // { done: true, value: undefined }
    console.log([...myIterable]); // expected output: Array [1, 2, 3]
    console.log(myIterable.sum()); // 6

    // Or iterables can be defined directly inside a class or object using a computed property:
    function usingComputedProperty() {
        class Foo {
            *[Symbol.iterator]() {
                yield 1;
                yield 2;
                yield 3;
            }
        }

        const someObj = {
            *[Symbol.iterator]() {
                yield 'a';
                yield 'b';
            },
        };

        console.log(...new Foo()); // 1, 2, 3
        console.log(...someObj); // 'a', 'b'
    }
}
