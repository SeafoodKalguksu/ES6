// Arrow function expressions
// An arrow function expression is a compact alternative to a traditional
// function expression, but is limited and can't be used in all situations.
// Arrow functions must be anonymous. So they are not bound to any identifier.

// Differences & Limitations:
// * Does not have its own bindings to this or super, and should not be used
//   as methods(** The method is a function belonging to an object).
// * Does not have new.target keyword.
// * Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// * Can not be used as constructors.
// * Can not use yield, within its body.

// Arrow functions as methods(from https://dmitripavlutin.com/javascript-method/)
// Using an arrow function as method isn't recommended, because it doesn't work as methods.
const world = {
    who: 'World',
    greet: () => {
        return `Hello, ${this.who}!`;
    },
};
world.greet(); // => 'Hello, undefined!'

// 'this' inside of the arrow function equals 'this' of the outer scope.
// That's why 'this' inside of the arrow function equals the global object:
// window in a browser. 'Hello, ${this.who}!' evaluates as Hello, ${windows.who}!,
// which in the end is 'Hello, undefined!'.
