const obj = {
  name: 'ABC',
  getName: function () {
    console.log(this.name);
  },
};

function getFuncDetail(userName, count) {
  (this.userName = userName), (this.count = count);
}
