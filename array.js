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
