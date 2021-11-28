// The arguments object
// arguments is an Array-like object accessible inside functions
// that contains the values of the arguments passed to that function.
// The arguments object is a local variable available within ***all non-arrow functions***.

// Note: The arguments object is not an Array.
// “Array-like” means that arguments has a length property and
// properties indexed from zero, but it doesn't have Array's built-in methods
// like forEach() or map().
function args() {
    let number = arguments.length;

    switch (number) {
        case 0:
            console.log('There were no arugments passed to the function.');
            break;
        case 1:
            console.log('Only one argument was passed to the function.');
            console.log(arguments[0]);
            break;
        case 2:
            console.log('Two arguments were passed to the function.');
            console.log(arguments[0]);
            console.log(arguments[1]);
            break;
        default:
            console.log('Three or more arguments were passed to the function.');
            break;
    }
}

// Rest parameters
// The rest parameter, also written with three consecutive dots ( ... ),
// allows you to represent an indefinite number of elements as an array.
// ES6+: rest parameters should be preferred because you can use array methods.
function restParameters() {
    add = (...args) => args.reduce((acc, cur) => acc + cur);
    let sum = add(3, 4, 5, 6); // 18
    sum = add.apply(null, [2, 3, 4, 5]); // 14

    // Using Math.min/Math.max apply
    const numbers = [5, 6, 2, 3, 7]; // min/max number in an array
    let max = Math.max.apply(null, numbers); // let max = Math.max(5, 6, 2, 3, 7);

    function constructor() {
        function User(name, age, ...skills) {
            this.name = name;
            this.age = age;
            this.skills = skills;
        }

        const user1 = new User('Mike', 29, 'HTML5', 'CSS');
        const user2 = new User('Jane', 29, 'English');
        const user3 = new User('Amy', 21);
    }
}
