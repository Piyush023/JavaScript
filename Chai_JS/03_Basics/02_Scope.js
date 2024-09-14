//  Block and Global - 
var a = 10; // Var is Global Scoped.
let aLet = 20; // Let is Block Scoped.

console.log("Var In the Global Scope(Before the Updation.): ",a)
console.log("Let In the Global Scope(Before the Updation.): ",aLet)

if(true){
    var a = 30; // Since the Var is a global scoped element this updating will change the value of a 
    console.log("Var Inside the Block Scope: ",a) // here it will output 20 inside the block and also change the value of the a in the global scope too
    
    let aLet = 40; // Since the Let is a block scoped element this updating will not change the value of aLet in the global scope.
    console.log("Let Inside the Block Scope: ",aLet) // here it will output 40 inside the block and will not update/change the value of the aLet in the global scope becoz let is block scoped element.
}

console.log("Var Outside the Block Scope and In the Global Scope: ",a) // Here it will also output 20 becoz its value is updated by the re-declaration of a in the block scope.

console.log("Let Outside the Block Scope and In the Global Scope: ",aLet) // Here it will also output 20 becoz its value is not affected/updated by the re-declaration of aLet in the block scope and it will not update the value and will use the value of globally defined aLet.

// Scope and Hoisting - 

function one(){

    const name = 'ABC'
    function two(){
        const age = 20;
        console.log('username: ', name) // This will run normally although name is a block scope element but the name is acting as a global scope inside the one function becoz of the declaration so this name will be accessible to the function two() here.
    }
    // console.log('age is ', age) // This point will give Error becoz of the Scope(Nested Scope) here the age is not accessible here becoz it is declared inside the function two() and since const/let are block scoped so the age variable will not be accessible here becoz of blocked scope variable.
    
    two()
}

one()

// Hoisting - 

hoisted() // This will give the Output of the function hoisted and will be executed normally.

function hoisted(){
    console.log("This has been Hoisted and give no error") // This will get hoisted - means can be called before the declaration of itself.
}

// Not being Hoisted - 

notHoisted() // So this will going to give error.

const notHoisted =  function(){
    console.log('This will not be hoisted as the it is wrapped inside a const') // This will not be hoisted becoz the declaration of this function is happened inside a const variable and the const only hoist the declaration and not the full function itself.
}
