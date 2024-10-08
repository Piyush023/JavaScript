const arr = [1, 2, 3, 4, 5];

// Reduce -
const res = arr.reduce((acc, curr) => {
  // The acc reps the previous value of the reducer
  // These are the acc and curr value passed as a prams to the function
  return acc + curr; // This is the cb for the custom implementation
}, 0); // This is the initial value of the acc passed as a param if we don't pass this then the initial value(0 th index) from the array will be the initial value of the acc.

// console.log(res);

// Custom Implementation -
// It will not return a new array but only a single value from the array.
// We need 4 things - 1. Callback function, 2. initial value of the acc.
Array.prototype.myReduce = function (cb, iValue) {
  let acc = iValue === 0 || iValue ? iValue : this[0];
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

console.log(
  arr.myReduce((acc, curr) => {
    return acc + curr;
  }, 0)
);
