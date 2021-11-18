// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
function closure() {
    // Using arrow function
    // const makeAdder = (x) => (y) => x + y;

    function makeAdder(x) {
        // the function (y) inner function is returned from the outer function before being executed.
        return function (y) {
            return x + y;
        };
    }

    const add5 = makeAdder(5);
    const add10 = makeAdder(10);
    // In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.
    // add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

    console.log(add5(2));
    console.log(add10(2));
}

// Usages: local variables in outer function is constant but variables in inner function can be changed often.
function practicalClosure() {
    function makeSizer(size) {
        return function () {
            document.body.style.fontSize = size + 'px';
        };
    }

    const size12 = makeSizer(12);
    const size14 = makeSizer(14);
}

// Emulating private methods with closures
// JavaScript does not provide a native way of declaring methods as private, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.
function emulatePrivateMethodsWithClosures() {
    function counter() {
        let privateCounter = 0;
        function changeBy(val) {
            privateCounter += val;
        }

        return {
            // ES5 style
            increase: function () {
                changeBy(1);
            },
            // ES6+ style
            decrease() {
                changeBy(-1);
            },
            getCounter() {
                return privateCounter;
            },
        };
    }

    // Calling a new counter() every line.
    console.log(counter().getCounter()); // 0.
    counter().increase();
    counter().increase();
    console.log(counter().getCounter()); // 2.
    counter().decrease();
    console.log(counter().getCounter()); // 1.

    let myCounter = counter();
    console.log(myCounter.getCounter()); // 0.
    myCounter.increase();
    myCounter.increase();
    console.log(myCounter.getCounter()); // 2.
    myCounter.decrease();
    console.log(myCounter.getCounter()); // 1.
}
