// The object and array literal expressions provide an easy way to create
// ad hoc packages of data.

// Array destructuring
const array = () => {
    let [first, second, third, rest] = [1, 2, 3, 4, 5]; // [1, 2, 3, 4]

    // Assigning the rest of an array to a variable
    [first, second, third, ...rest] = [1, 2, 3, 4, 5]; // [1, 2, 3, [ 4, 5 ]]

    // Default values
    [first = 10, second, rest = 30] = [100, 200]; // [100, 200, 3, 30]

    // Swapping variables
    [first, second, third] = [second, third, first]; // [200, 3, 100]

    // Parsing an array returned from a function
    const returnArray = () => [1, 2, 3];
    [first, , third] = returnArray(); // Ignoring some returned values
};

// Object destructuring
const obj = () => {
    const user = {
        id: 42,
        isVerified: true,
    };
    const { id, isVerified } = user;

    // Declaration
    const declaration = () => {
        let { a, b } = { a: 1, b: 2 };

        // Assignment separate from declaration
        let c, d;
        ({ c, d } = { c: 1, d: 2 });
        // {c, d} = {c: 1, d: 2} is not valid stand-alone syntax, as the {c, d}
        // on the left-hand side is considered a block and not an object literal.
    };
};

// Nested object destructuring
const nestedObject = () => {
    const website = {
        url: 'https://google.com',
        alias: 'Google',
        services: {
            mail: 'Gmail',
        },
    };
    const {
        services: { mail },
    } = website;
    console.log(mail);
};

// Combined Array and Object Destructuring
const combinedArrayAndObject = () => {
    const props = [
        { id: 1, name: 'Fizz' },
        { id: 2, name: 'Buzz' },
        { id: 3, name: 'FizzBuzz' },
    ];
    const [, , { name }] = props;
    console.log(name);
};

// Nested object and array destructuring
const nestedObjectAndArray = () => {
    const metadata = {
        title: 'Scratchpad',
        translations: [
            {
                locale: 'de',
                localization_tags: [],
                last_edit: '2014-04-14T08:43:37',
                url: '/de/docs/Tools/Scratchpad',
                title: 'JavaScript-Umgebung',
            },
        ],
        url: '/en-US/docs/Tools/Scratchpad',
    };

    // Rename to avoid the collision between variables.
    const renameVariables = () => {
        let {
            /*
            title, // 'Scratchpad'
            translations: [{ title }], // 'JavaScript-Umgebung'
            */
            title: originalTitle,
            translations: [{ title: localeTitle }],
        } = metadata;
        // console.log(title); // Collision occurred
    };
};

// For of iteration and destructuring
const for_of = () => {
    const people = [
        {
            name: 'Mike Smith',
            family: {
                mother: 'Jane Smith',
                father: 'Harry Smith',
                sister: 'Samantha Smith',
            },
            age: 35,
        },
        {
            name: 'Tom Jones',
            family: {
                mother: 'Norah Jones',
                father: 'Richard Jones',
                brother: 'Howard Jones',
            },
            age: 25,
        },
    ];

    for (const {
        name: son,
        family: { father: dad },
    } of people) {
        console.log(`${son}'s father is ${dad}.`);
    }
};
