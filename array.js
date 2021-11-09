let numbers = [1, 90, 78, 3, 22, 187, 21];
let students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];

// Array.prototype.forEach()
// The forEach() executes a provided function once for each array element.
// forEach((element, index, array) => { ... })
// Return value: undefined
const logElements = (array) => array.forEach((element) => console.log(element));

// Array.prototype.map()
// The map() creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// map((element, index, array) => { ... })
// Return value: A new array with each element being the result of the callback function.
const increaseForEachElementOfNumbers = (inc = 0) =>
    numbers.map((element) => element + inc);
const studentsNames = students.map((element) => element.name);
logElements(increaseForEachElementOfNumbers(1));
logElements(studentsNames);

// Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
// filter((element, index, array) => { ... } )
// Return value: A new array with the elements that pass the test.
// If no elements pass the test, an empty array will be returned.
const numbersGreaterThanNumber = (number = 0) =>
    numbers.filter((element) => element > number);
logElements(numbersGreaterThanNumber(21));

const studentsNameLengthGreaterThanNumber = (number = 0) =>
    students.filter((element) => element.name.length > number);
logElements(studentsNameLengthGreaterThanNumber(5));

const stringElementsFromMix = mix.filter(
    (element) => typeof element === 'string'
);
logElements(stringElementsFromMix);

// Array.prototype.reduce()
// The reduce() executes a user-supplied “reducer” callback function
// on each element of the array passing in the return value from the calculation
// on the preceding element.
// The final result of running the reducer across all elements of the array is
// a single value.
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
// reduce(callbackFn, initialValue)
// const reducer = (acc, curValue) => { ... };
let sumOfAllNumbers = (initialValue = 0) =>
    numbers.reduce((acc, curValue) => acc + curValue, initialValue);
console.log(sumOfAllNumbers());
console.log(sumOfAllNumbers(1)); // 1 + sumOfAllNumbers
