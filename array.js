let numbers = [1, 90, 78, 3, 22, 187, 21];
let students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];

// Array.prototype.forEach()
// The forEach() executes a provided function once for each array element.
// forEach((element, index, array) => { ... })
// Return value: undefined
let logElement = (array) => array.forEach((element) => console.log(element));
logElement(numbers);

let logNames = (array) => array.forEach((element) => console.log(element.name));
logNames(students);

// Array.prototype.map()
// The map() creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// map((element, index, array) => { ... })
// Return value: A new array with each element being the result of the callback function.
let makeNewArray = (array, func) => array.map(func);

let plusOne = (element) => element + 1;
let newNumbers = makeNewArray(numbers, plusOne);
logElement(newNumbers);

let getNames = (element) => element.name;
let studentsNames = makeNewArray(students, getNames);
logElement(studentsNames);

// Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
// filter((element, index, array) => { ... } )
// Return value: A new array with the elements that pass the test.
// If no elements pass the test, an empty array will be returned.
let makeFilteredArray = (array, filter, func) =>
    array.filter((element) => func(element, filter));

let getElementGreaterThanNumber = (element, number) => element > number;
let result = makeFilteredArray(numbers, 22, getElementGreaterThanNumber);
console.log(result);
