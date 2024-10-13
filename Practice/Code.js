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
