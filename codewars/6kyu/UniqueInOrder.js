var uniqueInOrder = function(iter) {
  if (typeof iter === "string") iter = iter.split("");
  const ans = [];
  for (const [i, v] of iter.entries()) {
    if (iter[i - 1] !== iter[i]) ans.push(v);
  }
  return ans;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"]
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"]
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
