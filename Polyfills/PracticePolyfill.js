const arr = [1, 2, 3, 4, 5, 6];

// Map Prototype -
Array.prototype.myMap = function (cb) {
  let res = [];
  this.forEach((item) => {
    res.push(cb(item));
  });
  return res;
};
console.log('***** MAP POLYFILL *****');
console.log(arr.myMap((num) => num * 2));

// Reduce Prototype -
Array.prototype.myReduce = function (cb, initVal) {
  let acc = initVal === 0 || initVal ? initVal : this[0];
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

const res = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log('***** REDUCE POLYFILL *****');
console.log(res);

// ForEach Prototype -
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

console.log('***** FOR EACH POLYFILL *****');
arr.myForEach((item) => console.log(item));

// Filter Polyfill -
Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

console.log('***** FILTER POLYFILL *****');
console.log(arr.myFilter((item) => item > 2));

// Call, Apply, Bind -
const p1 = {
  name: 'ABC',
};

const p2 = {
  name: 'XYZ',
};

function getName(age) {
  console.log(`${this.name} and age is ${age}`);
}

console.log('***** CALL POLYFILL *****');
Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('ERROR NOT A FUNCTION');
  }
  obj.fn = this;
  obj.fn(...args);
};

getName.myCall(p2, 21);

console.log('***** APPLY POLYFILL *****');
Function.prototype.myApply = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('ERROR NOT A FUNCTION');
  }
  if (!Array.isArray(...args)) {
    throw new Error('ERROR NOT A ARRAY');
  }
  obj.fn = this;
  obj.fn(...args);
};

getName.myApply(p2, [21]);

console.log('***** BIND POLYFILL *****');
Function.prototype.myBind = function (obj, ...args1) {
  if (typeof this !== 'function') {
    throw new Error('ERROR NOT A FUNCTION');
  }
  obj.fn = this;
  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

const bindFunc = getName.myBind(p2);
bindFunc(21);

console.log('***** FLAT POLYFILL *****');
Array.prototype.myFlat = function () {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error('NOT A ARRAY');
  }
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      res.push(...this[i].myFlat(this[i]));
    } else {
      res.push(this[i]);
    }
  }
  return res;
};

const nestArray = [1, 2, [3], [4, 5], [6, [7, [8]]]];
console.log(nestArray.myFlat());
