// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
function closure() {
    function makeAdder(x) {
        // the function (y) inner function is returned from the outer function before being executed.
        return function (y) {
            return x + y;
        };
    }

    // Using arrow function
    // const makeAdder = (x) =>
    //     function (y) {
    //         return x + y;
    //     };

    // In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.
    const add5 = makeAdder(5);
    const add10 = makeAdder(10);
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
