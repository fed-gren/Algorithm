//Number of trailing zeros of N!

function zeros(n) {
  let ans = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    ans += n;
  }
  return ans;
}

console.log(zeros(0)); //, 0,
console.log(zeros(14)); // 2
console.log(zeros(15)); // 3
console.log(zeros(20)); // 4
console.log(zeros(29)); // 6
console.log(zeros(30)); //, 7,
