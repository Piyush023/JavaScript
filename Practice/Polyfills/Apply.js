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
// printAge.apply(person1, [20]); // If we pass args without the arrays then it will give a array that it is not iteratable, we need to pass it as a Array only.
// printAge.apply(person2, [30]);

// Custom Working -
Function.prototype.myApply = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new Error('It is not callable');
  }
  if (!Array.isArray(...args)) {
    throw new Error('TypeError: CreateListFromArrayLike');
  }
  obj.fn = this;
  obj.fn(...args);
};

printAge.myApply(person1, [20]); // Arg is passed as a array if not passed as a array then it will give error.
