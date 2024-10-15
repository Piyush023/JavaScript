// 1. Output - undefined a and Will give error on the console.log(b)
(function () {
  console.log(a);
  if (true) {
    var a = 'a';
  }
  console.log(a);
  console.log(b); // This Point will throw an error.
  const bar = function () {
    var b = 'b';
    console.log(b);
  };
  bar();
  console.log(b);
})();

// 2. Output - This will print Hello as the SetTimeOut is WebAPI and the loop will continue going on and will fill the Execution Context and will never give the setTimeOut chance to even get added into the Context by the Event Loop.
let isFlag = true;
setTimeout(() => (isFlag = false), 10);
while (isFlag) {
  console.log('hello');
}

// 3. Output - Prototype Chain -
const obj = {
  name: 'ABC',
  age: 20,
};

console.log(Object.getPrototypeOf(obj));

// 4. Output - Call, Apply, Bind -
function getName(age) {
  console.log(this.name, age);
}

const person1 = {
  name: 'ABC',
};

const person2 = {
  name: 'XYZ',
};

getName.call(person2, 21); // Call Method.

getName.apply(person2, [21]); // Apply Method.

const getNameFunc = getName.bind(person2); // Bind Method.
getNameFunc(21);

// 5. Output -
