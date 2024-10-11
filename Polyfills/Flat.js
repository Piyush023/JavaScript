const arr = [1, 2, [[3, 4]]];
// console.log(arr.flat(2));

// Now this is working with the Depth Var, we can remove this depth var and it will still run fine.
Array.prototype.myFlat = function (depth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error('Not a Array');
  }
  // We have to loop through the array and will check if the element of the array is a array or not if array will spread it recursively and if not a array will push into the res array.
  this.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...el.myFlat(depth - 1));
    } else {
      res.push(el);
    }
  });
  return res;
};

console.log(arr.myFlat(2));
