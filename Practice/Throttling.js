// Throttling -
function throttle(cb, wait) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      const context = this;
      cb(context, args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  };
}
