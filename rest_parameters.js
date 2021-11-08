// The arguments object
// arguments is an Array-like object accessible inside functions
// that contains the values of the arguments passed to that function.
// The arguments object is a local variable available within all non-arrow functions.

// Note: The arguments object is not an Array.
// “Array-like” means that arguments has a length property and
// properties indexed from zero, but it doesn't have Array's built-in methods
// like forEach() or map().

function testArgumentsObject() {
    let number = arguments.length;

    switch (number) {
        case 0:
            console.log('there were no arugments passed to the function.');
            break;
        case 1:
            console.log('only one argument was passed to the function.');
            console.log(arguments[0]);
            break;
        case 2:
            console.log('two arguments were passed to the function.');
            console.log(arguments[0]);
            console.log(arguments[1]);
            break;
        case 3:
            console.log('three arguments were passed to the function.');
            console.log(arguments[0]);
            console.log(arguments[1]);
            console.log(arguments[2]);
            break;
        default:
            console.log('four or more arguments were passed to the function.');
            break;
    }
}

testArgumentsObject();
testArgumentsObject(1);
testArgumentsObject(1, '2');
testArgumentsObject(1, '2', 'hi');

// Rest parameters
// The rest parameter syntax allows a function to accept
// an indefinite number of arguments as an array,
// ES6+: rest parameters should be preferred.

let add = (...args) => {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
};

let sum = 0;
sum = add(3, 4, 5, 6);
sum = add.apply(null, [2, 3, 4, 5]);
console.log(sum);

// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers); // let max = Math.max(5, 6, 2, 3, 7);
console.log(max);
