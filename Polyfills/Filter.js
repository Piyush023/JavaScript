const arr = [1, 2, 3, 4, 5];

// Filter -
const res = arr.filter((item) => item !== 2);
// console.log(res);

// Custom Implementation -
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log(arr.myFilter((item) => item <= 2));
