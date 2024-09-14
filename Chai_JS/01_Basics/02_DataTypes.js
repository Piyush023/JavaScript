const accountId = 10 // This will be Number.
let accountEmail = 'xyz@gmail.com'; // This will be String.
let accountPassword = 12345; // This will be Number.
var isAccountActive = true; // This will be Boolean.
var accountType; // This will be undefined.
let accountStatus = null // This will be Object.

/*

Data Type In JS -

Primitive Data Types - 
    1. Number
    2. String
    3. Boolean
    4. Null - Represents Empty Value and it is a type of Object.
    5. Undefined - Represent that it is declared but don't have a value yet.
    6. Symbol - Used to Represent Uniqueness.
    7. BigInt - Used to Represent a Very Large Value.

Non Primitive Data Types - 
    1. Object
*/

console.table([typeof accountId, typeof accountEmail, typeof accountPassword,typeof isAccountActive, typeof accountType, typeof accountStatus])