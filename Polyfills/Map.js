const arr = [1, 2, 3, 4, 5];

// Map Polyfill -

// Inbuilt Map -
const res = arr.map((item) => item * 2);
console.log(res);

// Custom Implementation of Map Function -
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};

console.log(arr.myMap((item) => item * 2));
