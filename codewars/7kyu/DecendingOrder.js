const descendingOrder = n =>
  Number(
    n
      .toString()
      .split("")
      .map(num => Number(num))
      .sort((a, b) => a < b)
      .join("")
  );

console.log(descendingOrder(0)); //, 0)
console.log(descendingOrder(1)); //, 1)
console.log(descendingOrder(123456789)); //, 987654321)
