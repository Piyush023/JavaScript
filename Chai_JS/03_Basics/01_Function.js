// This is a definition and declaration of a function.
function hello(){
    console.log("HELLO WORLD")
}

// Function Declaration with some Parameters.
function hello(userName){
    console.log(`HELLO ${userName}`)
}


// This is Execution of the Function.
// hello()

hello('world as Argument')

// How to Pass any number of arg to a function - 
function handleMultipleArgs(...args){
    return args;
}

console.log(handleMultipleArgs(193,13,41,4,1,41,41,1414,41,4))

// How to pass a object to a function - 
const user =  {
    name:'ABC',
    age: 20
}

function handleObject(obj){
    console.log(obj.name, obj.age);
}

handleObject({name: user.name, age:user.age})

// How to pass a Array to a function - 
const Array =  [10,20,30,40]

function handleArray(arr){
    console.log(arr);
}

handleArray([10,20,30,40])