function getName(){
    let name = 'ABC'
    function printName(){
        console.log(name) // This log of name is due to the lexical scoping.
    }

    printName()
}

getName()

// Closures - 

function outer(){

    let innerVar = 'inner_Var'

    function inner(){
        console.log(innerVar)
    }

    return inner // Due to this return statement here the Whole Context/Lexical Scope of this function is send to the memory and when the outer is executed the context of the inner is removed after its execution and due to the return and the closure logic the whole execution is stored into the memory and it is accessible from the memory(Even though the Context of the Inner is removed from the Execution Context.)
}

const outerCall = outer()
outerCall()