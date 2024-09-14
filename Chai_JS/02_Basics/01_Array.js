// Arrays.

// 2 Ways to declare a Array - 
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = new Array(7, 8, 9, 10, 11)

arr1.push(20) // This will push 20 at the last index of the array.
console.log(arr1) // This will add 20 at the end

arr1.pop()

console.log(arr1) // This will Remove 20 from the end

arr1.unshift(10)

console.log(arr1) // This will add 10 in the starting of the Array (At the 0th Index)

arr1.shift()

console.log(arr1) // This will update Array and will remove the first element(0th Index Element) from the array.

console.log(arr1.includes(10))  // This will give the boolean on the basis of the element is in the Array or not.

console.log(arr1.indexOf(10))  // This will give the index of the element of the element on the basis of the element is in the Array or not.

const arrNew = arr1.join() // This will add all the elements of the Array into a string.

console.log(arrNew)

console.log(arr1, 'Before Slice')

console.log(arr1.slice(1, 4)) // Will give the subset of the Array from the Original Array without updating the original Array.

console.log(arr1, 'After Slice')

console.log(arr1, 'Before Splice')

console.log(arr1.splice(1, 4)) // Will give the subset of the Array from the Original Array **** with updating the original Array.****

console.log(arr1, 'Before Splice')

const testArr1 = [1, 2, 3, 4, 5]

const testArr2 = [6, 7, 8, 9, 10]

// Ways to merge 2 Arrays - 

// 1. Push - 
// console.log(testArr1.push(testArr2)) - These will put the 2nd Array as a Array into the other Array.

// 2. Concat - 
console.log(testArr1.concat(testArr2))

// 1. Spread Operator - 
console.log([...testArr1, ...testArr2])

const testArr = [1, 2, 3, 4, [4, 5, 6], 7, [6, 7, 8, 9]]
const testRes = testArr.flat(Infinity) // This will flat the whole array and return the array with no inside arrays.
console.log(testRes)

const a = 'abcdefg'
console.log(Array.from(a)) // This will convert the string into a array.
console.log(Array.from({name:'hello'})) // This will not convert this object into a array and will give a empty array in return.