// Object Literal - 

const user = {
    name: 'ABC',
    isLoggedIn: true,
    loginCount: 10,

    getUserDetail: function getDetail() {
        // console.log(userName) 
        // Now this will throw an Error as it will be undefined and It is not defined in the Current Context of the function. 
        console.log(this.name)
    }
}

// console.log(user.name)
console.log(user.getUserDetail())


// Constructor - 

// This is a Class based Syntax for the Constructor 
class getClassDetail {
    constructor(userName, count) {
        this.userName = userName,
            this.count = count
    }
}

// This is a Function based Syntax for the Constructor 
function getFuncDetail(userName, count) {
    this.userName = userName,
        this.count = count
}

// Class Based Calling - 
const u1Class = new getClassDetail('ABC', 10)
const u2Class = new getClassDetail('XYZ', 20)

// Function Based Calling - 
const u1Func = new getFuncDetail('ABC', 10)
const u2Func = new getFuncDetail('XYZ', 20)

console.log(u1Class, u2Class.constructor) // This constructor is just a reference of the getDetail Class.

console.log(u1Func, u2Func.constructor) // This constructor is just a reference of the getDetail function.