// Using 'const' and 'let' instead of 'var'

// #1: Variable scopes
function scope() {
    function varScope() {
        for (var i = 0; i < 5; i++) {
            console.log('Inside the loop: i =', i);
        }

        console.log('Outside the loop: i = ', i);
        // Outside the loop: i =  5
        // In this example, the i variable is available inside varScope().
        // Therefore, it can be accessed from both inside and after the for loop.
    }

    function letScope() {
        for (let j = 0; j < 5; j++) {
            console.log('Inside the loop j = :', j);
        }
        // console.log('Outside the loop: j = ', j); // Uncaught ReferenceError: j is not defined
        // The variable j is blocked scope.
    }
}

// #2: Creating global properties
// The global var variables are added to the global object as properties.
// The global object is window on the web browser and global on Node.js:
function globalProperties() {
    var counterVar = 0;
    console.log(window.counterVar); //  0

    let counterLet = 0;
    console.log(window.countetLet); // undefined
}

// #3: Redeclaration
// The var keyword allows you to redeclare a variable without any issue:
function redeclare() {
    function forVar() {
        var declaredByVar = 10;
        var declaredByVar;
        console.log(declaredByVar); // 10
    }

    function forLet() {
        // However, if you redeclare a variable with the 'let', you will get an error:
        let declaredByLet = 10;
        // let declaredByLet; // SyntaxError: Identifier 'declaredByLet' has already been declared
    }
}

// #4: The Temporal Dead Zone
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
function hoist() {
    let age = 30;
    var gender = 'female';

    function showAge() {
        // 'let age' is hoisted here but the assignment is not hoisted here!
        // console.log(age); // ReferenceError: Cannot access 'age' before initialization.
        let age = 20;
    }

    function showGender() {
        console.log(gender); // undefined, 'var gender' is hoisted here.
        var gender = 'male';
    }
}
