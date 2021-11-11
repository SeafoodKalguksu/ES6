// Examples of expressions that can be converted to false are:
// null;
// NaN;
// 0;
// empty string ("" or '' or ``);
// undefined.

// return true || false && false    // returns true, because && is executed first
// return false && (3 == 4)         // f && f returns false
// return 'Cat' && 'Dog'            // t && t returns 'Dog'
// return '' && false               // f && f returns ''
// return false || (3 == 4)         // f || f returns false
// return 'Cat' || 'Dog'            // t || t returns "Cat"
// return false || 'Cat'            // f || t returns "Cat"
// return 'Cat' || false            // t || f returns "Cat"
// return ''    || false            // f || f returns false
// return false || ''               // f || f returns ""
// return false || varObject        // f || object returns varObject

let cachedName = null;
const student = {
    name: 'Rei',
    age: 20,
    favorites: {
        food: 'Seafood Kalguksu',
        car: 'Benz',
    },
};

// Assigning default value to variable.
const name = cachedName || (cachedName = 'Anonymus');

// Checking for null objects before accessing their attributes.
const studentName = student && student.name;
