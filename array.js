const numbers = [1, 90, 78, 3, 22, 187, 21];

function forEach() {
    // Array.prototype.forEach()
    // The forEach() executes a provided function once for each array element.
    // forEach((element, index, array) => { ... })
    // Return value: undefined
    const logElements = (array) =>
        array.forEach((element) => console.log(element));
}

function includes() {
    // Array.prototype.includes()
    // The includes() determines whether an array includes a certain value
    // among its entries, returning true or false as appropriate.
    // includes(searchElement, fromIndex)
    console.log([1, 2, 3].includes(2)); // true
    console.log(['1', '2', '3'].includes(3)); // false
    console.log([1, 2, 3].includes(3, 3)); // false

    const arr = ['a', 'b', 'c'];
    console.log(arr.includes('c', 3)); // false
    console.log(arr.includes('c', 100)); // false

    // array length is 3, fromIndex is -100, computed index is 3 + (-100) = -97
    console.log(arr.includes('c', -100)); // true
    console.log(arr.includes('a', -2)); // is equal to arr.includes('a', 1)
}

function at() {
    // Array.prototype.at()
    // The at() method takes an integer value and returns the item at that index,
    // allowing for positive and negative integers.
    // Negative integers count back from the last item in the array.
    // at(index)
    const numbers = [5, 12, 8, 130, 44];

    // Using index in Array
    console.log(`numbers[2] = ${numbers[2]}`);
    console.log(`numbers[-1] = ${numbers[-1]}`);

    // Using at() method
    console.log(`numbers.at(-1) = ${numbers.at(-1)}`);

    // Using slice() method. Note an array is returned
    console.log(`numbers.slice(-2, -1) = ${numbers.slice(-3, -1)}`);
}

function find() {
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
}

function findIndex() {
    // Array.prototype.findIndex()
    // The findIndex() returns the index of the first element in the array
    // that satisfies the provided testing function.
    // Otherwise, it returns -1, indicating that no element passed the test.
    // findIndex((element, index, array) => { ... } )
    const isGreaterThan100 = (element) => element > 100;
    console.log(numbers.findIndex(isGreaterThan100));
}

function indexOf() {
    // Array.prototype.indexOf()
    // The indexOf() method returns the first index at which a given element
    // can be found in the array, or -1 if it is not present.
    // indexOf(searchElement, fromIndex)
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('bison'));
}

function reverse() {
    // Array.prototype.reverse()
    // The reverse() reverses an array in place.
    // The first array element becomes the last,
    // and the last array element becomes the first.
    // Return value: The reversed array.
    const reversedNumbers = numbers.reverse();
}

function sort() {
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

function from() {
    // Array.from()
    // The Array.from() static method creates a new, shallow-copied Array instance
    // from an array-like or iterable object.
    // Return value: A new Array instance.
    // Array.from(arrayLike, (element, index) => { ... } )
    // Array.from(arrayLike, mapFn, thisArg)
    console.log(Array.from('foo'));
    console.log(Array.from([1, 2, 3], (element) => element + element));
    console.log(Array.from({ length: 5 }, (v, i) => i)); // [0, 1, 2, 3, 4]

    const length = (start, stop, step) => Math.round((stop - start) / step);
    const range = (start, stop, step) =>
        Array.from(
            { length: length(start, stop, step) },
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
    ); // ["A", ... , "Z"]
}
from();

function join() {
    // Array.prototype.join()
    // The join() method creates and returns a new string by concatenating all of
    // the elements in an array (or an array-like object), separated by commas or
    // a specified separator string. If the array has only one item,
    // then that item will be returned without using the separator.
    // join(separator)

    const names = ['john', 'sam', 'adam', 'ethan'];
    console.log(names.join());
    console.log(names.join(''));
    console.log(names.join(' '));
}

function concat() {
    // Array.prototype.concat()
    // The concat() method is used to merge two or more arrays.
    // This method does not change the existing arrays, but instead returns a new array.
    // concat(value0, value1, ... , valueN)
    const array1 = ['a', 'b', 'c'];
    const array2 = array1.concat(1, [2, 3]); // [ 'a', 'b', 'c', 1, 2, 3 ]
    console.log(array2);

    // Nested arrays
    const num1 = [[1]];
    const num2 = [2, [3]];
    const numbers = num1.concat(num2);
    // remove [] from num1 and num2: [[1]] => [1], [2, [3]] => 2, [3]
    console.log(numbers); // [ [1], 2, [3] ] ]

    num1[0].push(4);
    // num2[0].push(5); // 2.push(5) because num2[0] is not an array.
    num2[1].push(6); // [3].push(6)
    console.log(numbers); // [ [ 1, 4 ], 2, [ 3, 6 ] ]
}
