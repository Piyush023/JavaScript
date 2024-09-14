class user {
    constructor(userName, password, email){
        this.userName = userName
        this.password = password
        this.email = email
    }

    logMe(){
        console.log(this.email, this.password, this.userName)
    }
}

// Child Class to use extend to extend the parent class User to Teacher - 
class Teacher extends user{
    constructor(userName, password, email){
        super(userName, password, email) // here this super function will take care of the whole this here basically will call the constructor od the user Class and will set all the properties.
    }

    teachMe(){
        console.log(`Teaches me about ${this.email, this.password, this.userName}`)
    }
}

const t1 = new Teacher('ABC', 'Pass', 'abc@gmail.com')

const u1 = new user('ABC', 'Pass', 'abc@gmail.com')

console.log(t1.logMe(), t1.teachMe())

// console.log(u1.logMe(), u1.teachMe()) // This will give Error as the Parent can not access the function of the Child.

// To Check if a class is a Child of the Parent - we can use the instanceof Keyword to check this.

console.log(t1 instanceof user)
