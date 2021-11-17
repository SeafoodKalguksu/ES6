const global = {
    numbers: [1, 90, 78, 3, 22, 187, 21],
    students: [
        { name: 'Albert', age: 19 },
        { name: 'Bob', age: 20 },
        { name: 'Claudia', age: 22 },
    ],
};

const logElements = (array) => array.forEach((element) => console.log(element));

// Array.prototype.map()
// The map() creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// map((element, index, array) => { ... })
// Return value: A new array with each element being the result of the callback function.
function map() {
    const increaseForEachElementOfNumbers = (inc = 0) =>
        global.numbers.map((element) => element + inc);
    const studentsNames = global.students.map((element) => element.name);
    logElements(increaseForEachElementOfNumbers(1));
    logElements(studentsNames);

    let newStudentsList = global.students.map((student, index) =>
        Object.assign({}, student, { id: index + 1, isAdult: student.age > 19 })
    );
    logElements(newStudentsList);
}

// Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
// filter((element, index, array) => { ... } )
// Return value: A new array with the elements that pass the test.
// If no elements pass the test, an empty array will be returned.
function filter() {
    const numbersAreGreaterThan = (number = 0) =>
        global.numbers.filter((element) => element > number);
    logElements(numbersAreGreaterThan(21));

    const studentsNameLengthGreaterThan = (number = 0) =>
        global.students.filter((element) => element.name.length > number);
    logElements(studentsNameLengthGreaterThan(5));

    let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];
    const stringElementsFromMix = mix.filter(
        (element) => typeof element === 'string'
    );
    logElements(stringElementsFromMix);

    let evenNumbers = global.numbers.filter((element) => element % 2 === 0);
    console.log('evenNumbers = ', evenNumbers);

    let adultStudents = global.students.filter((student) => student.age > 19);
    console.log('adult students = ', adultStudents);
}

// Array.prototype.reduce()
// The reduce() executes a user-supplied “reducer” callback function
// on each element of the array passing in the return value from the calculation
// on the preceding element.
// The final result of running the reducer across all elements of the array is
// a single value.
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
// reduce(callbackFn, initialValue)
// const reducer = (acc, curValue) => { ... };
// Return value: The value that results from running the “reducer”
// callback function to completion over the entire array.
function reduce() {
    const sumOfAllNumbers = (initialValue = 0) =>
        global.numbers.reduce((acc, curValue) => acc + curValue, initialValue);
    console.log(sumOfAllNumbers());
    console.log(sumOfAllNumbers(1)); // 1 + sumOfAllNumbers
}
