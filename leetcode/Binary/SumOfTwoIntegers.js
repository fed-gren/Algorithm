/**
 * @url https://leetcode.com/problems/sum-of-two-integers/
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let c;
  while ((c = a & b) != 0) {
    a = a ^ b;
    b = c << 1;
  }
  return a ^ b;
};

let ans = 0;
let a, b;
a = 1;
b = 2;
ans = getSum(a, b);
console.log(ans);

a = -2;
b = 3;
ans = getSum(a, b);
console.log(ans);

a = -4;
b = 2;
ans = getSum(a, b);
console.log(ans);