const arr = [1, 2, 3, 4, 5];

// For Each Polyfill -

// Inbuilt ForEach -
arr.forEach((item) => console.log(item));

// Custom Polyfill -
function forEachCbPrint(element) {
  console.log(element);
}

Array.prototype.myForEach = function () {
  for (let i = 0; i < this.length; i++) {
    forEachCbPrint(this[i]);
  }
};

arr.myForEach(forEachCbPrint);
