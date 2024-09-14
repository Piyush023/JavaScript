function debounce(func, wait) {
    let timer = null;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (timer) {
                func.apply(context, args);
            }
        }, wait);
    };
}

const increment = debounce(function add(delta) {
    this.val += delta;
    console.log(this.val, 'val', delta)
    // return this.val - This will always return undefined.
}, 10);

const obj = {
    val: 2,
    increment,  // This will always results in Undefined becoz, from a async function like (Debounce - SetTimeOut) we can not access the return value of the function that is debounced and we can only get the consoleLog becoz the function context is removed from the call Stack and the function execution is still going on becoz of the debounce setTimeOut
};

console.log(obj.increment(2), "Result") // This will also give the output of Undefined - Becoz we are printing the value of the output from the debounced function.

let i = 21;
const multiply = debounce((a, b) => {
    i += a * b;
    console.log(i)
    // return i - This will always return undefined.
}, 100);

console.log(multiply(3, 7)) // This will also give the output of Undefined - Becoz we are printing the value of the output from the debounced function.

// Object Destructuring Question - 
const testObj = {
    report: [
        { subject: "Maths", marks: 80 },
        { subject: "English", marks: 90 },
    ],
};

const [{ marks: Mmarks }, { marks: Emarks }] = testObj.report;
// console.log(Mmarks);
