// Is Function is a Object or not  - 
function multiply(num){
    return num*5;
}

multiply.power = 1

console.log(multiply(10))
console.log(multiply.power) // Since a function is a also a Object so the (.) Dot Notation works here.

console.log(multiply.prototype) // This will be a empty Object


// Prototype Behavior - 


// Class Type Declaration of the Same User Function - 

// class user{
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }
// }

// Function Type Declaration 
function user(name, price){
    this.name = name
    this.price = price
}

user.prototype.getNamePrice = function(){
    // console.log(name, price) // Now this will give error becoz of the context missing from the Execution. - We need to pass this in this function to define the Current Context.

    console.log(this.name, this.price) // The this keyword here will have the context of the function that called this function with params.
}

// const u1 = user('ABC',10) // This will also give error becoz of the initialization of the user Object without the new keyword - Becoz new will create a new Context for this u1 and currently without the new it will not update the context with the value of getNamePrice Function.
const u1 = new user("ABC", 10)
const u2 = new user('XYZ',20)

console.log(u1.getNamePrice()) // Now this will give error becoz of the context missing from the Execution.