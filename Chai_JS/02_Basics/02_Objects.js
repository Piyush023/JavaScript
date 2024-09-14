const user = {
    name:'ABC',
    'full Name': 'XYZ',
    email: 'abc@gmail.com',
    age: 20,
    location: 'Mumbai',
    isLoggedIn: false,
    lastLoggedIn: ['Mon', 'Tues', 'Fir']
}

// @ ways to access the Objects - 
console.log(user.name); // Using the Dot Operator.
console.log(user['name']); // Using the Braces Operator.
console.log(user.age);
console.log(user.location);
console.log(user['full Name']); // This braces is helpful only in these kind of cases.

// How to create a Symbol and use the symbol to access any property in the Object using that object - 
const mySym = Symbol('key1');

user.mySym = 'myKey1'

console.log(user.mySym)

// Object.freeze(user) // This will make the object Immutable. and Now we can not make any changes ot the Object.

user.greeting = function() {
    console.log('Hello World');
}

user.greeting2 = function() {
    console.log(`Hello ${this.name}`);
}

user.greeting2()

// Another Way to Declare Object - 
const a = new Object()
a.firstName = "ABC"

const b = new Object()
b.lastName = "XYZ"

// This is way to merge 2 Objects
const c = {...a, ...b}
console.log(c)

const d = new Object()
d.MidName = "CDE"

// Another Way - 
const e = Object.assign(c,d)
console.log(e)

console.log(Object.keys(user)); // This will give a array of the keys of the Object.
console.log(Object.values(user)); // This will give a array of the values of the Object.
console.log(Object.entries(user)); // This will give a array of the keys and values pair of the Object.

// Object Destructuring - 
const {age} = user