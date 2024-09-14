const user = {
    userName: 'ABC',
    price: 99,
    message: function(){
        console.log(`${this.userName}, ${this.price}`)
        // console.log(this) // Here the console.log will log out the this(Current Context of the execution Context) and will print out the current execution Scope Context which is the User Object.
    }
}

user.message();
user.userName = 'XYZ' // Changing this userName value here will change the context of the object and sine we are printing the userName and price with using the this keyword so the this here will refer the current context and will log out the current context value of the userName and price and since the value of the useName is being updated here and it will change the context of the user Object and the updated value of XYZ will be logged out in the console in the next console.log.
user.message();


console.log(this); // Here this will print out a empty object as the this here is referring to the current execution context and will print out the current reference of the execution context and that will the execution context of the Node Environment and that will be Empty Object as there is not any execution in the Global Context.

// This Keyword and Arrow Function - 

// Normal Function - 
function definedThis(){
    console.log(this) // Here In this Normal Function, the function has a this keyword referring to the context of the Function and here this will have the properties of the function itself and not the global context
}

definedThis() // SO this will log the Function Object to the console.log becoz it is referring to the Local Execution Context of the function.

// Arrow Function - 
const unDefinedThis = () => {
    console.log(this) // Here In this Arrow Function, the function has a this keyword referring to the context of the global Object, here this will have the properties of the global object (Global Execution Context).
}

unDefinedThis() // SO this will log Empty Object to the console.log becoz it is referring to the Global Context and not the local Context of the function.

const returnObject = () => ({name: 'ABC'})

console.log(returnObject())