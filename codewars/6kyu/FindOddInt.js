Array.prototype.howMany = function(n) {
  return this.reduce((acc, cur) => (cur === n ? acc + 1 : acc), 0);
};

const findOdd = A =>
  A.reduce(
    (acc, curr, _, arr) => (arr.howMany(curr) % 2 !== 0 ? (acc = curr) : acc),
    null
  );

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //, 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //, -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //, 5);
console.log(findOdd([10])); //, 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //, 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //, 1);
