// Basic Currying -
function basicCurry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const join = (a, b, c) => {
  return a + b + c;
};

// Advanced Currying - With N Number of Args
function curryWithLimitedArgs(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const joinWithNArgs = (...args) => {
  // console.log('Hello', args)
  let sum = 0;
  args.forEach((item) => {
    sum += item;
  });
  return sum;
};

function curryWithAnyNumArgs(fn) {
  // The curried function, which initially doesn't have any arguments.
  return function curried(...args) {
    // If no arguments are passed, return the current result.
    if (args.length === 0) {
      return fn(); // This is just a safeguard in case someone calls curried() directly with no args.
    }
    // Return a new function that accumulates arguments
    return function (...args2) {
      const newArgs = args.concat(args2); // Concatenate the new arguments
      // If there are no new arguments, execute the function.
      if (args2.length === 0) {
        return fn.apply(this, newArgs);
      }
      // Otherwise, keep currying.
      return curried.apply(this, newArgs);
    };
  };
}

const updatedJoinWithAnyNumArgs = (...args) => {
  return args.reduce((sum, item) => sum + item, 0);
};

// Example usage

// 1. Normal 3 Args Currying -
// Currying the join function
const ThreeArgsCurrying = basicCurry(join);
console.log(ThreeArgsCurrying(1)(2)(3));

// 2. Multiple Args Currying -
// Currying the join function
const curriedJoin = curryWithLimitedArgs(join);
console.log(curriedJoin(1)(2)(3));

// 3. N Number Args Currying -
// Currying the join function
const curriedJoinWithAnyNumArgs = curryWithAnyNumArgs(
  updatedJoinWithAnyNumArgs
);
console.log(curriedJoinWithAnyNumArgs(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(20)()); // Need to call the last one with empty args in order to call the else case in Recursion
console.log(curriedJoinWithAnyNumArgs(1, 2)(3)(4, 5)(6, 7, 8, 9)()); // Need to call the last one with empty args in order to call the else case in Recursion
