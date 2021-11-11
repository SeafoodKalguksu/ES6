// The object and array literal expressions provide an easy way to create
// ad hoc packages of data.

// Array destructuring
function array() {
    let [first, second, third, rest] = [1, 2, 3, 4, 5]; // [1, 2, 3, 4]

    // Assigning the rest of an array to a variable
    [first, second, third, ...rest] = [1, 2, 3, 4, 5]; // [1, 2, 3, [ 4, 5 ]]

    // Default values
    [first = 10, second, rest = 30] = [100, 200]; // [100, 200, 3, 30]

    // Swapping variables
    [first, second, third] = [second, third, first]; // [200, 3, 100]

    // Parsing an array returned from a function
    const returnArray = () => [1, 2, 3];
    [first, , third] = returnArray(); // Ignoring some returned values
}
array();

// Object destructuring
function obj() {
    const user = {
        id: 42,
        isVerified: true,
    };
    const { id, isVerified } = user;

    let a, b;
    ({ a, b } = { a: 1, b: 2 });
    // {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b}
    // on the left-hand side is considered a block and not an object literal.

    // Nested object destructuring
    const website = {
        url: 'https://google.com',
        alias: 'Google',
        services: {
            mail: 'Gmail',
        },
    };
    const {
        services: { mail },
    } = website;
    console.log(mail);
}
obj();
