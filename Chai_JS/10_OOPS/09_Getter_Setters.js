class classUser{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    get email(){
        return `${this._email}-ABC`
    }

    set email(value){
        this._email = value // We need to create a new variable just to make sure that the code does not get into a loop between the values from the constructor and the setters and the getters.
    }

    get name(){
        return `${this._name.toUpperCase()}-NAME`
    }

    set name(value){
        this._name = value // We need to create a new variable just to make sure that the code does not get into a loop between the values from the constructor and the setters and the getters.
    }
}

const u1 = new classUser('Hello', 'hello@world.com')

console.log(u1.name)

// Old Syntax - Using Prototypes - 

function funcUser(name, email){
    this._name = name
    this._email = email

    Object.defineProperty(this, 'name', { // Need to pass the this here to send the context of the current executing function.
        get: function(){
            return this._name.toUpperCase()
        },
        set: function(value){
            this.name = value
        }
    })

    Object.defineProperty(this, 'email', { // Need to pass the this here to send the context of the current executing function.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
}


const u2 = new funcUser('XYZ', 'xyz@hw.com')

console.log(u2.name)
console.log(u2.email)