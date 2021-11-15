const globalStrings = {
    desc: 'This is a description for string.',
    text: 'Mozilla',
    name: 'Mike',
    greeting: '   Hello world!   ',
    fruits: ['01. Orange', '02. Apple', '03. Kiwi', '04. Pear'],
};

// Property
const length = globalStrings.desc.length;

// strings are immutable.
globalStrings.name[3] = 'y'; // nothing happened.
globalStrings.name = 'Miky'; // "Miky"

// String.prototype.includes(searchString, position)
// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
function includes() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const word = 'fox';

    console.log(
        `The word "${word}" ${
            sentence.includes(word) ? 'is' : 'is not'
        } in the sentence.`
    );
}

// String.prototype.indexOf(searchValue, fromIndex)
// The indexOf() method returns the index within the calling String object of
// the first occurrence of the specified value, starting the search at fromIndex.
// Returns -1 if the value is not found.
indexOf = () => {
    globalStrings.desc.indexOf('is'); // return 2

    // the if statement is false because return 0 from globalStrings.desc.indexOf('This')
    // if (globalStrings.desc.indexOf('This')) {
    if (globalStrings.desc.indexOf('This') > -1) {
        console.log("'That' is included in the given sentence.");
    }
};

// String.prototype.slice(beginIndex, endIndex)
// The slice() extracts a section of a string and returns it as a new string,
// without modifying the original string.
slice = () => {
    globalStrings.desc.slice(2); // "is is a description for string."
    globalStrings.desc.slice(0, 5); // "This "
    globalStrings.desc.slice(2, -2); // "is is a description for strin"

    // slice() also treats NaN arguments as 0, but when it is given negative
    // values it counts backwards from the end of the string to find the indexes.
    console.log(globalStrings.text.slice(-5, 2)); // => ""
    console.log(globalStrings.text.slice(-5, -2)); // => "zil"
};

// String.prototype.substring(indexStart, indexEnd)
// The substring() method returns the part of the string between the start and
// end indexes, or to the end of the string.
// Return value: a new string containing the specified part of the given string.
substring = () => {
    console.log(globalStrings.text.substring(1, 3)); // "oz"

    // If indexStart is greater than indexEnd, then the effect of substring() is
    //  as if the two arguments were swapped; See example below.
    console.log(globalStrings.text.substring(3, 1)); // is equal to str.substring(1, 3).

    // ***
    // Any argument value that is less than 0 or greater than stringName.
    // length is treated as if it were 0 and stringName.length, respectively.
    // ***
    console.log(globalStrings.text.substring(-5, 2)); // => "Mo"
    console.log(globalStrings.text.substring(-5, -2)); // => ""
};

// String.prototype.substr(start, length)
// The substr() returns a portion of the string, starting at the specified index
//  and extending for a given number of characters afterwards.
substr = () => {
    console.log(globalStrings.text.substr(0, 1)); // 'M'
    console.log(globalStrings.text.substr(1, 0)); // ''
    console.log(globalStrings.text.substr(-1, 1)); // 'a'
    console.log(globalStrings.text.substr(1, -1)); // ''
    console.log(globalStrings.text.substr(-3)); // 'lla'
    console.log(globalStrings.text.substr(1)); // 'ozilla'
    console.log(globalStrings.text.substr(-20, 2)); // 'Mo'
    console.log(globalStrings.text.substr(20, 2)); // ''
};

// String.prototype.trim()
// The trim() method removes whitespace from both ends of a string. Whitespace
// in this context is all the whitespace characters (space, tab, no-break space,
// etc.) and all the line terminator characters (LF, CR, etc.).
trim = () => console.log(globalStrings.greeting.trim());
// expected output: "   Hello world!   " => "Hello world!"

// String.prototype.codePointAt(pos)
// returns a non-negative integer that is the UTF-16 code point value.
codePointAt = () => {
    console.log(globalStrings.name.codePointAt()); // "M"
    console.log(globalStrings.name.codePointAt(1)); // "i"
};

// String.fromCodePoint(num1, num2, ..., numN)
// The static String.fromCodePoint() method returns a string created by using
// the specified sequence of code points.
fromCodePoint = () => {
    console.log(String.fromCodePoint(42)); // "*"
    console.log(String.fromCodePoint(65, 90)); // "AZ"
};

toUpperCase = () => globalStrings.desc.toUpperCase();
toLowerCase = () => globalStrings.desc.toLowerCase();

logFruitName = () => {
    let fruitNameList = [];
    globalStrings.fruits.forEach((element) =>
        fruitNameList.push(element.slice(4))
    );
    console.log(fruitNameList);
};

maskForbiddenWord = (source, forbiddenWord) => {
    let filteredSentence = '';
    const sentence = source.toLowerCase();
    const word = forbiddenWord.toLowerCase();
    let offset = 0;
    let index = source.indexOf(word);

    while (index > -1) {
        filteredSentence +=
            source.slice(offset, offset + index) + '*'.repeat(word.length);
        offset += index + word.length;
        index = sentence.slice(offset).indexOf(word);
    }
    filteredSentence += source.slice(offset);

    console.log(`${source}`);
    console.log(`${filteredSentence}`);
};

checkForbiddenWord = (source = '', forbiddenWord = '') =>
    source.includes(forbiddenWord) ? true : false;

checkForbiddenWord('Beach bitch Bitch Bitch Beachbitch beach bitch!', 'bitch');
