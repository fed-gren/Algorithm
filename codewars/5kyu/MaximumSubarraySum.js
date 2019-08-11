const maxSequence = function(arr) {
  let min = 0,
    ans = 0,
    sum = 0;
  const len = arr.length;

  for (let i = 0; i < len; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};
console.log(maxSequence([])); // 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6);
