// Callback and Promises - 

// Callbacks - 
/*
createOrder(cart, function () {
    proceedToPayment(orderId, function () {
        showOrderSummary(paymentInfo, function () {
            updateWallet()
        })
    })
})
*/

// This will lead to callback hell and inversion of control, To Overcome this we use the Promises - 

// Promise - 
/* 
createOrder(cart)
    .then(function () { return proceedToPayment(orderId) })
    .then(function () { return showOrderSummary(paymentInfo) })
    .then(function () { return updateWallet() })
*/

// In this way we are not giving the control of the API to nay other service and also this give us the surety that it will call the API only when there is data from the previous call is there and it will only call the next API when the Promise from the last call is fulfilled and the API call will be done only once. The return will flow the data from one promise to the other.

// How to Write a Promise - 
/*
const cart = ['Shoe', 'Pant', 'Shirt']

const orderPromise = createOrder(cart)

orderPromise
    .then(function (orderId) {
        console.log(orderId)
        return orderId // This will return the orderId of the OrderPromise to the Next .then in the Chain. We have to Return a value of the Next .then by using the return keyword.
    })
    .then(() => {
        return proceedToPayment() // This will return the Promise of the ProceedToPayment to the Next .then in the Chain.
    })
    // Here the Value of paymentInfo we are getting it from the Last Promise from the ProceedToPayment Promise Since it is returning the Promise of the itself and it will console.log the value from the Promise of the ProceedToPayment.
    .then((paymentInfo) => {
        console.log(paymentInfo)
    })
    // When there is only one Catch in the Promise chain it will handle all the Error from the All of the Promises in the chain and will handle and give the error of all the Promise (As one gets rejected or anything else.) If in case this is at the Top of the chain then it will update and check the Error of the 1st Promise only.
    .catch((err) => {
        console.log(err, 'Error')
    })
    .then(()=>{
        console.log("This catch will def be called")
    })

function validateCart() {
    return true
}

function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) { // JS gives us 2 function which represent the state of the Promise Either it can be Resolve(Successful) or it can be Rejected(Fail/Error)
        if (!validateCart(cart)) {
            const err = new Error('Cart not valid')
            reject(err); // Reject marks the Error or the Failure of the Promise.
        }
        const orderId = '12345'
        if (orderId) {
            resolve(orderId); // Resolve marks the Success of the Promise.
        }
    })
    // In the End we will return the Promise - 
    return promise
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve('Promise Payment Success')
    })
}
*/

// All the Promise API - 



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000)
})


const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000)
    setTimeout(() => reject("P2 Rejected"), 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000)
})

// Promise.All() - 

// This will give the output only after the all the Promise are Resolved and if one of them is rejected it will give the response as soon as the Promise is rejected and the response will be 
Promise.all([p1, p2, p3]).then((res) => {
    console.log("The Promise.all Result - ", res)
}).catch((err) => {
    console.error(err, 'Promise.all Error')
})

// Promise.allSettled() - 
// This will give the output only after the all the Promise are Resolved and if one of them is rejected it will give the response only after all the Promises are settled weather rejected or resolved and it will give the Response as a array of the values of the Response from the Promises
Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log("The Promise.allSettled Result - ", res)
}).catch((err) => {
    console.error(err, 'Promise.allSettled Error')
})

// Promise.Race() - 
// This will give the output only after any one of the Promise is settled and if one of them is settled it will give the response as soon as the Promise is weather rejected or resolved and it will give the Response as a normal value of the Response from the 1st settled Promise.
Promise.race([p1, p2, p3]).then((res) => {
    console.log("The Promise.Race Result - ", res)
}).catch((err) => {
    console.error(err, 'Promise.race Error')
})

// Promise.Any() - 
// This will give the output only after any one of the Promise is Resolved and if one of them is Resolved it will give the response as soon as the Promise is weather only resolved and it will give the Response as a normal value of the Response from the 1st Resolved Promise.
Promise.any([p1, p2, p3]).then((res) => {
    console.log("The Promise.Any Result - ", res)
}).catch((err) => {
    console.error(err, 'Promise.Any Error')
})