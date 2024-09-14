const arr = [1,2,3,4,5,6,7,8,9,10]

const filterRes = arr.filter((item)=>{
    return item>4
})

console.log(filterRes) // This will return the number in a array which are greater than 4.


const mapRes = arr.map((item)=>{
    return item * 4
})

console.log(mapRes) // This will return the number in a array multiplied by 4.

// Function Chaining - 
const chainRes = arr.map((item)=>item * 3).filter((item)=> item%2 === 0)

console.log(chainRes) // This will return the number in a array multiplied by 3 and which are also divisible by 2.

// Reduce - 
const initial = 0
const reduceRes = arr.reduce((acc, curr)=> acc+curr, initial)
console.log(reduceRes)