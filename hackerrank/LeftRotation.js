/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function rotLeft(a, d) {
  const len = a.length;
  let cnt = d % len;

  return [...a.slice(cnt), ...a.slice(0, cnt)];
}

let ans, a, d;
a = [1, 2, 3, 4, 5];
d = 4;

ans = rotLeft(a, d);
console.log(ans); //[5,1,2,3,4]