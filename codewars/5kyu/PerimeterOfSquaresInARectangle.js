function perimeter(n) {
  const memo = new Array(n + 1);
  const end = n + 1;
  memo[0] = 0;
  memo[1] = 1;
  let ans = memo[1];
  for (let i = 2; i <= end; i += 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
    ans += memo[i];
  }
  return 4 * ans;
}
console.log(perimeter(5)); // 80
console.log(perimeter(7)); // 216
console.log(perimeter(20)); // 114624
console.log(perimeter(30)); // 14098308
