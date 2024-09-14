const accountId = 10 // This will be Number.
let accountEmail = 'xyz@gmail.com'; // This will be String.
let accountPassword = 0; // This will be Number.
var isAccountActive = true; // This will be Boolean.
var accountType; // This will be undefined.
let accountStatus = null // This will be Object.

/*

DataType Conversion In JS -

Number - 
    '33' => 33
    '33abc' =>  NaN
    true => 1
    false => 0
    null => 0

Boolean - 
    1 => true
    0 => false
    '' => false
    'abc' => true
*/

// console.table([Boolean(accountId), Number(accountEmail), Boolean(accountPassword), Number(isAccountActive), Number(accountType), Number(accountStatus)])

// console.log(1+'2')
// This will result into the output of 12
// console.log(1+2+'2')
// This will result into the output of 32 because the JS will execute this code from left to right and will add 1 and 2 first and then update the value of '2' and convert it into a string 
// console.log(+true)
// This will output 1 becoz due + operator it will convert this into number.
// console.log(+'')
// This will output 0 becoz due + operator it will convert this into number.


// ++++++++++++++ Stack and Heap - +++++++++++++++++++++++


// Stack and Primitive Type - 

// Since a is primitive so it goes and get saved in the Stack memory and the value of a is passed by value so a copy of a is passed to b.
let a = 'ABC'

// Since a is primitive so it goes and get saved in the Stack memory and the value of a is passed by value so a copy of a is passed to b and if it gets change then there is also a effect on the value of b.
// a = '10'

let b = a;
// Since b is primitive so it goes and get saved in the Stack memory and the value of is passed by value so a copy of b is passed and if b gets change then there is no effect on the value of a.
b = 10

console.log(a, b)

// Heap and Non Primitive Type - 

// Since aObj is Non-primitive so it goes and get saved in the Heap memory and the value of aObj is passed by Reference (Value Reference means the original value is stored there and if the value is somehow is updated then the original value is also updated in the heap memory) so the original value ref of aObj is passed to bObj.
let aObj = {name: 'ABC'}

// Since aObj is Non-primitive so it goes and get saved in the Heap memory and the value of aObj is passed by Reference so original value of aObj is passed to oObj and if it gets change then there is also aObj effect on the value of bObj.
// a = '10'

let bObj = aObj;
// Since bObj is Non-primitive so it goes and get saved in the Heap memory and the value of is passed by Reference so the original value of bObj is passed and if bObj gets change then there is also a effect on the value of aObj.
bObj.name = "XYZ"
 
console.log(aObj, bObj)