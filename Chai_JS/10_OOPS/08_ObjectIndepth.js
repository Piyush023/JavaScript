const pi = Object.getOwnPropertyDescriptor(Math, "PI") // This will give the entire detail about the Properties of the Object and we can update the properties of a object using this.
console.log(pi)


const user = {name: 'ABC', isActive: true, age: 20}

const updateName = Object.defineProperty(user, 'name', {
    enumerable: false, // This will make the Object property for the name not iteratable
    writable: false // This will make the Object property for the name not Fixed and not able to change it.
})

user.name = 'XYZ'

console.log(user.name)