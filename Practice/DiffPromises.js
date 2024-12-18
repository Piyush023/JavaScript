Promise.myAll = function (promises) {
  let counter = 0;
  let res = [];
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      item
        .then((result) => {
          counter++;
          res[index] = result;
          if (counter === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAllSettle = function (promises) {
  let counter = 0;
  let res = [];
  return new Promise((resolve) => {
    promises.forEach((item, index) => {
      item
        .then((result) => {
          counter++;
          res[index] = result;
          if (counter === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          counter++;
          res[index] = err;
        });
    });
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      item
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      item
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {});
    });
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 Success');
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise2 Success');
    reject('Promise2 Reject');
  }, 50);
});

Promise.myAll([p1, p2])
  .then((res) => {
    console.log('Promise.All Resolve', res);
  })
  .catch((err) => {
    console.log('Promise.All Reject', err);
  });

Promise.myAllSettle([p1, p2])
  .then((res) => {
    console.log('Promise.AllSettled Resolve', res);
  })
  .catch((err) => {
    console.log('Promise.AllSettled Reject', err);
  });

Promise.myRace([p1, p2])
  .then((res) => {
    console.log('Promise.Race Resolve', res);
  })
  .catch((err) => {
    console.log('Promise.Race Reject', err);
  });

Promise.myAny([p1, p2])
  .then((res) => {
    console.log('Promise.Any Resolve', res);
  })
  .catch((err) => {
    console.log('Promise.Race Reject', err);
  });
