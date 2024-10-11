const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 Success');
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise2 Success');
    reject('Promise2 Reject');
  }, 1000);
});

// Promise.all([p1, p2])
//   .then((res) => {
//     console.log('The Promise.all Result - ', res);
//   })
//   .catch((err) => {
//     console.error(err, 'Promise.all Error');
//   });
// This is inBuilt Method for Promise.All

// Custom Logic -
Promise.myAll = function (promiseArr) {
  // Here we will be getting a Promise Array and the we have to iterate through the array and call each of the promise if at any time one gets rejected we will reject the whole promise else we will return a Promise in which a array with the result of the Promises.
  let resArr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((pro, index) => {
      pro
        .then((res) => {
          count++; // Count to maintain if all the Promises are resolved or not.
          resArr[index] = res; // This is for the Ordering of the Response from the Passed Promise Array.
          if (count === promiseArr.length) {
            resolve(resArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
