const person1 = {
  name: 'ABC',
};

const person2 = {
  name: 'XYZ',
};

function printAge(age) {
  console.log(`${this.name} is ${age} year old`);
}

// Inbuilt Working -
// printAge.call(person1, 20);
// printAge.call(person2, 30);

// Custom Working -
Function.prototype.myCall = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('It is not callable');
  }
  obj.fn = this;
  obj.fn(...args);
};

printAge.myCall(person1, 20);
