// Classes in JS - 
class userClass {
    constructor(name, password) {
        this.name = name
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    toLowerCase() {
        return this.name.toLowerCase()
    }
}

const u1 = new userClass("ABC", 1010)
console.log(u1, u1.encryptPassword(), u1.toLowerCase())

// Same but with Function Code - 
function userFunc(name, password) {
    this.name = name
    this.password = password
}

userFunc.prototype.encryptPassword = function () {
    return `${this.password}abc`
}


userFunc.prototype.toLowerCase = function () {
    return this.name.toLowerCase()
}

const u2 = new userFunc("XYZ", 200)
console.log(u2, u2.encryptPassword(), u2.toLowerCase())