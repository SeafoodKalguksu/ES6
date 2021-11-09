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
// Return value: The value of the first element in the array
// that satisfies the provided testing function. Otherwise, undefined is returned.

// Using arrow function and destructuring
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'cherries', quantity: 5 },
];
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
