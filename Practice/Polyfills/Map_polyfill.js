const arr = [1, 2, 3, 4, 5]


// Custom Polyfill - 
// 1. For Each Polyfill - 

// Inbuilt ForEach - 
// arr.forEach((item)=> console.log(item))

function forEachCbPrint(element) {
    console.log(element)
}
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        forEachCbPrint(this[i])
    }
}

// arr.myForEach(forEachCbPrint)

// 2. Map Polyfill - 

// Inbuilt Map -
const res = arr.map((item) => item * 2)
// console.log(res)

// Custom Implementation of Map Function - 

// Custom Implementation - 
Array.prototype.myMap = function (cb) {
    let arr = []
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr;
}

console.log(arr.myMap((item) => item*2))