/**
 * https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Strings
 */
function alternatingCharacters(s) {
  let ans = 0;
  const arr = s.split("");
  let before = arr.shift();
  ans = arr.reduce((acc, cur) => {
    if(before === cur) return acc + 1;
    else {
      before = cur;
      return acc;
    }
  }, ans);
  return ans;
}

let s, ans;
s = "AAAA";
ans = alternatingCharacters(s);
console.log(ans); //3

s = "BBBBB";
ans = alternatingCharacters(s);
console.log(ans); //4

s = "ABABABAB";
ans = alternatingCharacters(s);
console.log(ans); //0

s = "BABABA";
ans = alternatingCharacters(s);
console.log(ans); //0

s = "AAABBB";
ans = alternatingCharacters(s);
console.log(ans); //4
