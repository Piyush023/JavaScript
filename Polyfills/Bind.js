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
// Basically bind works in a way that it gives us a function which in return can be called with one of the argument used in the calling function. like in this case - printAge(age).

const getAge = printAge.bind(person1); // Here we need to create a instance of the function that is called using bind keyword and we will pass the object here and then we can call the instance with the arg of the printAge function when calling the getAge function(Instance).

getAge(20); // here we can pass only the arg which is required by the function called using the bind keyword.

// Custom Working -
Function.prototype.myBind = function (obj, ...args) {
  x;
  if (typeof this !== 'function') {
    throw new Error('It is not callable');
  }
  if (!Array.isArray(...args)) {
    throw new Error('TypeError: CreateListFromArrayLike');
  }
  obj.fn = this;
  obj.fn(...args);
  return fn;
};

printAge.myBind(person1, [20]); // Arg is passed as a array if not passed as a array then it will give error.
