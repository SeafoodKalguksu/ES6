function math() {
    let num1 = 5.1;
    let num2 = 5.7;

    function ceil() {
        Math.ceil(num1); // 6
        Math.ceil(num2); // 6
    }

    function floor() {
        Math.floor(num1); // 5
        Math.floor(num2); // 5
    }

    function round() {
        Math.round(num1); // 5
        Math.round(num2); // 6
    }

    // Randomize number range 0 to less than 1 (inclusive of 0, but not 1)
    random = () => Math.floor(Math.random() * 100) + 1; // From 1 to 100
    max = () => Math.max(1, 4, -1, 5, 10, 9, 9.54); // 10
    min = () => Math.min(1, 4, -1, 5, 10, 9, 9.54); // -1
    abs = () => Math.abs(-1); // 1
    pow = () => Math.pow(2, 10); // 2¹⁰ = 1024
    sqrt = () => Math.sqrt(16); //4
}

function number() {
    let num = 30.1234;

    function toFixed() {
        // Round to two places
        console.log(`num = ${num.toFixed(2)}`); // num = 30.12
        console.log(`num = ${Math.round(num * 100) / 100}`); // num = 30.12

        console.log(`num = ${num.toFixed(6)}`); // num = 30.123400
    }

    function parseInt() {
        let margin = '10px';
        let redColor = 'f3';

        parseInt(margin); // 10
        Number(margin); // NaN

        parseInt(redColor); //NaN
        parseInt(redColor, 16); // 243
        parseInt('11', 2); // 3
    }

    function isNotANumber() {
        let result = Number('x'); // NaN

        result == NaN; // false
        result === NaN; // false
        NaN == NaN; // false
        isNaN(result); // true
        isNaN(3); // false
    }
}
