global = {
    numbers: [1, 90, 78, 3, 22, 187, 11, 21],
    fruits: ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'],
    beasts: ['ant', 'bison', 'camel', 'duck', 'bison'],
    userList: [
        { name: 'mike', age: 30 },
        { name: 'Jane', age: 27 },
        { name: 'Tom', age: 10 },
    ],
    inventory: [
        { name: 'apples', quantity: 2 },
        { name: 'cherries', quantity: 5 },
    ],
};

// Array.isArray()
Array.isArray(global.fruits)
    ? console.log('global.fruits is an array')
    : console.log('global.fruits is not an array');

// Array.prototype.forEach()
// The forEach() executes a provided function once for each array element.
// forEach((element, index, array) => { ... })
// Return value: undefined
function forEach() {
    global.numbers.forEach((element) => console.log(element));
    global.fruits.forEach((element, index) =>
        console.log(`index = ${index}, element = ${element}`)
    );

    function isPrime(element) {
        let start = 2;

        while (start <= Math.sqrt(element)) {
            if (element % start++ === 0) {
                return false;
            }
        }

        return element > 1;
    }

    function getPrimeNumbers(numbers, primeNumbers) {
        numbers.forEach((element) => {
            if (isPrime(element)) primeNumbers.push(element);
        });
    }

    let primeNumbers = [];
    getPrimeNumbers(global.numbers, primeNumbers);
    console.log(`prime numbers = ${primeNumbers}`);

    function getEvenNumbers(numbers, evenNumbers) {
        numbers.forEach((element) => {
            if (element % 2 === 0) {
                evenNumbers.push(element);
            }
        });
    }

    let evenNumbers = [];
    getEvenNumbers(global.numbers, evenNumbers);
    console.log(`even numbers = ${evenNumbers}`);
}

// Array.prototype.includes()
// The includes() determines whether an array includes a certain value
// among its entries, returning true or false as appropriate.
// includes(searchElement, fromIndex)
function includes() {
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

// Array.prototype.at()
// The at() method takes an integer value and returns the item at that index,
// allowing for positive and negative integers.
// Negative integers count back from the last item in the array.
// at(index)
function at() {
    // Using index in Array
    console.log(`global.numbers[2] = ${global.numbers[2]}`);
    console.log(`global.numbers[-1] = ${global.numbers[-1]}`);

    // Using at() method
    console.log(`global.numbers.at(-1) = ${global.numbers.at(-1)}`);

    // Using slice() method. Note an array is returned
    console.log(
        `global.numbers.slice(-2, -1) = ${global.numbers.slice(-3, -1)}`
    );
}

function find() {
    // Array.prototype.find()
    // The find() returns the value of the first element in the provided array
    // that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.
    // find((element, index, array) => { ... } )
    // Using arrow function and destructuring
    console.log(global.inventory.find(({ name }) => name === 'cherries'));

    const minorUser = global.userList.find((user) =>
        user.age < 20 ? true : false
    );
    console.log(
        `The minor user's name is ${minorUser.name} and his age is ${minorUser.age}.`
    );
}

// Array.prototype.findIndex()
// The findIndex() returns the index of the first element in the array
// that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.
// findIndex((element, index, array) => { ... } )
function findIndex() {
    const isGreaterThan100 = (element) => element > 100;
    console.log(global.numbers.findIndex(isGreaterThan100));
}

// Array.prototype.indexOf()
// The indexOf() method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
// indexOf(searchElement, fromIndex)
function indexOf() {
    // global.beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(global.beasts.indexOf('bison')); // 1
    console.log(global.beasts.indexOf('bison', 2)); // 4
}

// Array.prototype.lastIndexOf(searchElement, fromIndex)
// The lastIndexOf() method returns the last index at which a given element can
// be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.
function lastIndexOf() {
    // global.beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(global.beasts.lastIndexOf('bison')); // 4
    console.log(global.beasts.lastIndexOf('bison', 0)); // -1
    console.log(global.beasts.lastIndexOf('bison', -2)); // 1
}

// Array.prototype.reverse()
// The reverse() reverses an array in place.
// The first array element becomes the last,
// and the last array element becomes the first.
// Return value: The reversed array.
function reverse() {
    const reversedNumbers = global.numbers.reverse();
}

// Array.prototype.sort()
// The sort() sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into
// strings, then comparing their sequences of UTF-16 code units values.
function sort() {
    console.log(global.numbers); // [1, 90, 78, 3, 22, 187, 21];
    console.log(global.numbers.sort()); // Ascending based on string
    console.log(global.numbers.sort().reverse());
    console.log(global.numbers.sort((a, b) => (a > b ? -1 : 1)));

    console.log(global.numbers.sort((a, b) => a - b)); // Ascending based on number
    console.log(global.numbers.sort((a, b) => a - b).reverse());
    console.log(global.numbers.sort((a, b) => b - a));

    const students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
    console.log(students);
    console.log(students.sort().reverse());
}

// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance
// from an array-like or iterable object.
// Return value: A new Array instance.
// Array.from(arrayLike, (element, index) => { ... } )
// Array.from(arrayLike, mapFn, thisArg)
function from() {
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

// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of
// the elements in an array (or an array-like object), separated by commas or
// a specified separator string. If the array has only one item,
// then that item will be returned without using the separator.
// join(separator)
function join() {
    const names = ['john', 'sam', 'adam', 'ethan'];
    console.log(names.join());
    console.log(names.join(''));
    console.log(names.join(' '));
}

function pushAndPop() {
    // Array.prototype.pop()
    // The pop() method removes the last element from an array and returns that element.
    // Return value: The removed element from the array; undefined if the array is empty.
    const number = global.numbers && global.numbers.pop();

    // Array.prototype.push()
    // The push() method adds one or more elements to the end of an array
    // and returns the new length of the array.
    // push(element0, element1, ... , elementN)
    const newLength = global.numbers && global.numbers.push(number);
}

function shiftAndUnshift() {
    // Array.prototype.shift()
    // The shift() removes the first element from an array and returns that removed element.
    const number = global.numbers && global.numbers.shift();

    // Array.prototype.unshift()
    // The unshift() method adds one or more elements to the beginning of an array
    // and returns the new length of the array.
    // unshift(element0, element1, ... , elementN)
    const newLength = global.numbers && global.numbers.unshift(number);
}

// Array.prototype.concat()
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// concat(value0, value1, ... , valueN)
function concat() {
    const array1 = ['a', 'b', 'c'];
    const array2 = array1.concat(1, [2, 3]); // [ 'a', 'b', 'c', 1, 2, 3 ]

    // Nested arrays
    const num1 = [[1]];
    const num2 = [2, [3]];

    numbers = num1.concat(num2); // [ [1], 2, [3] ] ]
    // remove [] from num1 and num2: [[1]] => [1], [2, [3]] => 2, [3]

    num1[0].push(4); // [ 1, 4 ]
    // num2[0].push(5); // 2.push(5): type error occurred because 2 is not an array.
    num2[1].push(6); // [3].push(6)
    console.log(global.numbers); // [ [ 1, 4 ], 2, [ 3, 6 ] ]
}

// Array.prototype.slice(start, end)
// The slice() method returns a shallow copy of a portion of an array into
// a new array object selected from start to end (end not included) where start
// and end represent the index of items in that array. The original array will
// not be modified.
// Return value: a new array containing the extracted elements.
function slice() {
    let fruits = global.fruits; // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
    let citrus = fruits.slice(1, 3); // [ 'Orange', 'Lemon' ]
}

// Array.prototype.splice(start, deleteCount, item1, item2, itemN)
// The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place. To access part of
// an array without modifying it, see slice().
// Return value: an array containing the deleted elements.
function splice() {
    let arr = global.numbers; // [1, 90, 78, 3, 22, 187, 21]

    // To remove elements.
    arr.splice(1, 2); // [1, 3, 22, 187, 21]

    // To replace elements.
    arr.splice(1, 3, 100, 200); // [ 1, 100, 200, 21 ]
    arr.splice(1, 0, 31, 87); //  [1, 31, 87, 100, 200, 21 ]
    let result = arr.splice(3, 2); // [100, 200]
    console.log(result);
    console.log(global.numbers);
}
