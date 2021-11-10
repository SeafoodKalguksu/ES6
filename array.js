const numbers = [1, 90, 78, 3, 22, 187, 21];

function forEachExample() {
    // Array.prototype.forEach()
    // The forEach() executes a provided function once for each array element.
    // forEach((element, index, array) => { ... })
    // Return value: undefined
    const logElements = (array) =>
        array.forEach((element) => console.log(element));
}

function isPrime(element, index, array) {
    let start = 2;

    while (start <= Math.sqrt(element)) {
        if (element % start++ === 0) {
            return false;
        }
    }

    return element > 1;
}

function findExample() {
    // Array.prototype.find()
    // The find() returns the value of the first element in the provided array
    // that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.
    // find((element, index, array) => { ... } )
    // Using arrow function and destructuring
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'cherries', quantity: 5 },
    ];

    console.log(inventory.find(({ name }) => name === 'cherries'));
    console.log([4, 6, 8, 12].find(isPrime));
    console.log([4, 5, 8, 12].find(isPrime));
}

function findIndexExample() {
    // Array.prototype.findIndex()
    // The findIndex() returns the index of the first element in the array
    // that satisfies the provided testing function.
    // Otherwise, it returns -1, indicating that no element passed the test.
    // findIndex((element, index, array) => { ... } )
    const isGreaterThan100 = (element) => element > 100;
    console.log(numbers.findIndex(isGreaterThan100));
}

function indexOfExample() {
    // Array.prototype.indexOf()
    // The indexOf() method returns the first index at which a given element
    // can be found in the array, or -1 if it is not present.
    // indexOf(searchElement, fromIndex)
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('bison'));
}

function reverseExample() {
    // Array.prototype.reverse()
    // The reverse() reverses an array in place.
    // The first array element becomes the last,
    // and the last array element becomes the first.
    // Return value: The reversed array.
    const reversedNumbers = numbers.reverse();
}

function sortExample() {
    // Array.prototype.sort()
    // The sort() sorts the elements of an array in place and returns the sorted array.
    // The default sort order is ascending, built upon converting the elements into
    // strings, then comparing their sequences of UTF-16 code units values.
    console.log(numbers); // [1, 90, 78, 3, 22, 187, 21];
    console.log(numbers.sort()); // Ascending based on string
    console.log(numbers.sort().reverse());
    console.log(numbers.sort((a, b) => (a > b ? -1 : 1)));

    console.log(numbers.sort((a, b) => a - b)); // Ascending based on number
    console.log(numbers.sort((a, b) => a - b).reverse());
    console.log(numbers.sort((a, b) => b - a));

    const students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
    console.log(students);
    console.log(students.sort().reverse());
}

function fromExample() {
    // Array.from()
    // The Array.from() static method creates a new, shallow-copied Array instance
    // from an array-like or iterable object.
    // Return value: A new Array instance.
    // Array.from(arrayLike, (element, index) => { ... } )
    // Array.from(arrayLike, mapFn, thisArg)
    console.log(Array.from('foo'));
    console.log(Array.from([1, 2, 3], (element) => element + element));
    console.log(Array.from({ length: 5 }, (v, i) => i)); // [0, 1, 2, 3, 4]

    const getLength = (start, stop, step) => Math.round((stop - start) / step);
    const range = (start, stop, step) =>
        Array.from(
            { length: getLength(start, stop, step) },
            (_, i) => start + i * step
        );

    console.log(range(0, 6, 1)); // [ 0, 1, 2, 3, 4, 5 ]
    console.log(range(1, 6, 2)); // [ 1, 3, 5 ]
    console.log(range(-6, 0, 1)); // [ -6, -5, -4, -3, -2, -1 ]
    console.log(range(-6, 0, 2)); // [ -6, -4, -2 ]

    console.log(range(6, 0, -1)); // [ 6, 5, 4, 3, 2, 1 ]
    console.log(range(6, 0, -2)); // [ 6, 4, 2 ]
    console.log(range(-1, -6, -1)); // [ -1, -2, -3, -4, -5 ]
    console.log(range(-1, -6, -2)); // [ -1, -3, -5 ]

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    console.log(
        range('AtoZ'.charCodeAt(0), 'AtoZ'.charCodeAt(3), 1).map((element) =>
            String.fromCharCode(element)
        )
    );
    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}
