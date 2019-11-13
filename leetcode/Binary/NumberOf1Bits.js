/**
 * @url https://leetcode.com/problems/number-of-1-bits/
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  //숫자를 입력받아 비트로 변환했을 때, 1이 몇개인지 확인하는 함수.
  return n.toString(2).split('').filter(bit => bit === '1').length;
};

let n, ans;
n = 11;
ans = hammingWeight(n);
console.log(ans);  //3

//Best
//정규 표현식 활용
var hammingWeight2 = function (n) {
  // remove 0s from base2 representation of the number
  return n.toString(2).replace(/0/g, '').length;
};

//bitwise, bit shift 활용
var hammingWeight3 = function (n) {
  var count = 0;
  while (n) {
    if (n & 1 == 1) {
      count++;
    }
    n = n >>> 1;
  }
  return count;
};

//HAKMEM algorithm https://stackoverflow.com/questions/15233121/calculating-hamming-weight-in-o1/15233569
var hammingWeight4 = function (x) {
  x = x - ((x >> 1) & 0x55555555);
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0F0F0F0F;
  x = x + (x >> 8);
  x = x + (x >> 16);
  return x & 0x0000003F;
};

n = 11;
ans = hammingWeight4(n);
console.log(ans);  //3
