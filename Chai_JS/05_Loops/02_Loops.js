// For Of Loops - 
const arr = [1,2,3,4,5,6]

for(const i of arr){
    console.log(i)
}

const str = 'hello world!'

for(const strI of str){
    console.log(strI)
}

// Map - 
const map = new Map()

map.set('IN', "India")
map.set('US', "USA")
map.set('Fr', "France")

// for(const key of map) - To ge the value as a array from the map entry.
for(const [key, value] of map){ 
    // Now this will print the keys and value of the map as a Array - ['IN', 'India'] - To get the value sas keys and value separated we can use this syntax - [keys, value] in place of key, what this does is, it destructure the value of the key value pair of the entry of the map.
    console.log(key+' : '+value)
}

// Object Iteration - 
const obj = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four'
}

// For IN Loop - 
for (const objIndex in obj){
    console.log(objIndex) // This wil, output the keys of the object and not value 
    // To get value we need to do this - 
    console.log(obj[objIndex]) // This will output the values of the object.
}

// For Each Loop -
arr.forEach((item)=>{
    console.log(item)
})