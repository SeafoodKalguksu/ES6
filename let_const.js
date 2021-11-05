// Using const and let instead of var

// #1: Variable scopes
for (var i = 0; i < 5; i++) {
    console.log('Inside the loop: i =', i);
}

console.log('Outside the loop: i = ', i);
// Outside the loop: i =  5
// In this example, the i variable is a global variable.
// Therefore, it can be accessed from both inside and after the for loop.

for (let j = 0; j < 5; j++) {
    console.log('Inside the loop j = :', j);
}

console.log('Outside the loop: j = ', j);
// Uncaught ReferenceError: j is not defined
// The variable j is blocked scope.

// #2: Creating global properties
// The global var variables are added to the global object as properties.
// The global object is window on the web browser and global on Node.js:
var counter_var = 0;
console.log(window.counter_var); //  0

let counter_let = 0;
console.log(window.counter_let); // undefined

// #3: Redeclaration
// The var keyword allows you to redeclare a variable without any issue:
var counter = 10;
var counter;
console.log(counter); // 10

// However, if you redeclare a variable with the 'let', you will get an error:
let counter = 10;
let counter; // error

// #4: The Temporal dead zone
// The var variables
// In the creation phase, the JavaScript engine assigns storage spaces to
// the var variables and immediately initializes them to undefined.
// In the execution phase, the JavaScript engine assigns the var variables
// the values specified by the assignments if there are ones.
// Otherwise, the var variables remain undefined.

// The let variables
// In the creation phase, the JavaScript engine assigns storage spaces to
// the let variables but does not initialize the variables.
// Referencing uninitialized variables will cause a ReferenceError.
// The let variables have the same execution phase as the var variables.
