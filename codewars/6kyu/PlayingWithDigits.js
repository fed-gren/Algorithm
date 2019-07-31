function digPow(n, p) {
  const s = Number(n)
    .toString()
    .split("")
    .map(c => c * 1)
    .map(c => Math.pow(c, p++))
    .reduce((acc, cur) => acc + cur);
  const k = s / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
