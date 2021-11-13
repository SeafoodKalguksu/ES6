// Examples of expressions that can be converted to false are:
// null;
// NaN;
// 0;
// empty string ("" or '' or ``);
// undefined.

null == undefined ? console.log('true') : console.log('false');
null === undefined ? console.log('true') : console.log('false');

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
Number(null) == Number(undefined) ? console.log('true') : console.log('false');
Number(null) === Number(undefined) ? console.log('true') : console.log('false');
