function basicCurry(fn) {
    // Basic Currying - 
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

function curryWithLimitedArgs(fn) {
    // Advanced Currying - With Any Number of Args
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
            // console.log(curry.apply(this, [args]))
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}
// function curryNArgsJoin(fn) {
//     return function nArgsCurried(...args) {
//         if (args.length >= 1) {
//             return function (...args2) {
//                 return nArgsCurried.apply(this, args.concat(args2));
//             }
//         } else {
//             return fn.apply(this, args);
//         }
//     }
// }

const join = (a, b, c) => {
    return a + b + c;
}

const joinWithNArgs = (...args) => {
    console.log('Hello', args)
    let sum = 0;
    args.forEach((item) => {
        sum += item
    })
    return sum
}

const curriedJoin = curryWithLimitedArgs(join);
// const curriedNArgsJoin = curryNArgsJoin(joinWithNArgs);

console.log(curriedJoin(1)(2)(3))
console.log(curriedJoin(1, 2, 3, 4, 5, 6, 7, 8, 9)) // Types of currying Calls
// console.log(curriedNArgsJoin(1)(2)(3)(4)(5)(6)(7)(8)(9)()) // Need to call the last one with empty args in order to call the else case in Recursion - This will not work for the N Number of args. Check the below one - 

// Info - This function is for currying of the any num of args - 
function curryWithAnyNumArgs(fn) {
    // The curried function, which initially doesn't have any arguments.
    return function curried(...args) {
        console.log(args.length)
        // If no arguments are passed, return the current result.
        if (args.length === 0) {
            console.log('If 0')
            return fn(); // This is just a safeguard in case someone calls curried() directly with no args.
        }

        // Return a new function that accumulates arguments
        return function (...args2) {
            const newArgs = args.concat(args2); // Concatenate the new arguments

            // If there are no new arguments, execute the function.
            if (args2.length === 0) {
                console.log('if args0')
                return fn.apply(this, newArgs);
            }

            // Otherwise, keep currying.
            return curried.apply(this, newArgs);
        };
    };
}

// Example function to be curried
const updatedJoinWithAnyNumArgs = (...args) => {
    return args.reduce((sum, item) => sum + item, 0);
};

// Currying the join function
const curriedJoinWithAnyNumArgs = curryWithAnyNumArgs(updatedJoinWithAnyNumArgs);

// Example usage
console.log(curriedJoinWithAnyNumArgs(1)(2)(3)(4)(5)(6)(7)(8)(9)()); // Output: 45
console.log(curriedJoinWithAnyNumArgs(1, 2)(3)(4, 5)(6, 7, 8, 9)()); // Output: 45