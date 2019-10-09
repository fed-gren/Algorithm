/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */
function birthday(s, d, m) {
  var count = 0;
  const len = s.length;
  for (var i = 0; i < len - m + 1; i++) {
    var sum = 0;
    for (var j = 0; j < m; j++) {
      sum = sum + s[i + j];
    }
    if (sum == d) {
      count++;
    }
  }
  return count;
}

let s, d, m, ans;
s = [1, 2, 1, 3, 2];
d = 3;
m = 2;
ans = birthday(s, d, m);
console.log(ans);//2
