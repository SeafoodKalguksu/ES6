const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'cherries', quantity: 5 },
];

let numbers = [1, 90, 78, 3, 22, 187, 21];

// Array.prototype.forEach()
// The forEach() executes a provided function once for each array element.
// forEach((element, index, array) => { ... })
// Return value: undefined
const logElements = (array) => array.forEach((element) => console.log(element));

// Array.prototype.find()
// The find() returns the value of the first element in the provided array
// that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// find((element, index, array) => { ... } )
// Using arrow function and destructuring
const result = inventory.find(({ name }) => name === 'cherries');
console.log(result); // { name: 'cherries', quantity: 5 }

function isPrime(element, index, array) {
    let start = 2;

    while (start <= Math.sqrt(element)) {
        if (element % start++ === 0) {
            return false;
        }
    }

    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime));
console.log([4, 5, 8, 12].find(isPrime));

// Array.prototype.findIndex()
// The findIndex() returns the index of the first element in the array
// that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.
// findIndex((element, index, array) => { ... } )
const isGreaterThan100 = (element) => element > 100;
console.log(numbers.findIndex(isGreaterThan100));
// expected output: 3
