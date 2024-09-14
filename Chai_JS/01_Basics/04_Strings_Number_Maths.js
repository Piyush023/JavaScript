// String
// 2 ways to define String - Simply declaring and defining it and Other Using new Keyword.
const aString = '10';
const bString = new String(20)

console.log(aString, bString)

// Numbers
// 2 ways to define Numbers - Simply declaring and defining it and Other Using new Keyword.
const aNumber = 10;
const bNumber = new Number(20)

console.log(aNumber, bNumber);

// Maths - 
console.log(Math.abs(-4))  // Gives a Absolute Value of a Negative Value.

console.log(Math.round(4.484))  // Gives a Rounded Value of a Decimal Number.

console.log(Math.floor(4.38382))  // Gives a Floor  Value of a Decimal Number.

const max = 10
const min = 0;

console.log(Math.floor(Math.random() * (max - min + 1) + min));