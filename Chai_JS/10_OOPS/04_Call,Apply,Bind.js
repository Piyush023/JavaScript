// Class Based - 
class setUserName {
    constructor(name) {
        // Complex Logic
        console.log(name)
        this.name = name
    }
}

class setUser {
    constructor(name, pass, isLogin) {
        // setUserName(name) // We can not call this function here becoz it is a class and we need a constructor and we have to make a object of this with a new and then call it.
        
        const userNameInstance = new setUserName(name); // Create an instance of setUserName

        this.name = userNameInstance.name; // Now this will work fine and the context of the setUser function is passed to the setUserName function and the context of the setUser will save the name and set it too while the context of the setUserName is destroyed.

        this.pass = pass
        this.isLogin = isLogin
    }
}

const u1 = new setUser('ABC', 123, true)
console.log(u1) // Without the .call the output will not contain the Name it will only contain the pass and isLogin

// Function Based - 
function funcSetUserName(name) {
    // Complex Logic
    console.log(name)
    this.name = name
}

function funcSetUser(name, pass, isLogin) {
    // setUserName(name) // This is called without .call() so it's context will be cleared after its execution and the name will not be set in the User Object. To fix this we will use the .call()
    setUserName.call(this, name) // Now this will work fine and the context of the setUser function is passed to the setUserName function and the context of the setUser will save the name and set it too while the context of the setUserName is destroyed.

    this.pass = pass
    this.isLogin = isLogin
}

const funcU = new funcSetUserName('ABC', 123, true)
console.log(funcU) // Without the .call the output will not contain the Name it will only contain the pass and isLogin

// Other Example - 

function func(age, address) {
    return (`${this.name}-${this.lastName}-${age}-${address}`)
}
const obj = { name: 'tarun', lastName: 'bhan' }

// Call - 
console.log(func.call(obj, 22, 'india'))

// Apply - 
console.log(func.apply(obj, [22, 'india']))

// Bind Example - 
const t = func.bind(obj, 22, 'india')
console.log(t())