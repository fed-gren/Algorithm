/**
 * https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * string
 */
function compare(a, b){return a - b;}

function allElSame(arr) {
  const before = arr.shift();
  return arr.every(c => c === before);
}

function isValid(s) {
  let arr = [];
  const aCode = "a".charCodeAt();
  for (let i = 0; i < 26; i += 1) {
    arr[i] = 0;
  }
  for (let c of s) {
    arr[c.charCodeAt() - aCode] += 1;
  }

  arr = arr.filter(c => c !== 0);
  arr.sort(compare);
  const front = [...arr];
  const back = [...arr];
  if(front[0] === 1 ) front.shift();
  back[back.length - 1] -= 1;
  return (allElSame(front) || allElSame(back)) ? "YES" : "NO";
}

let s, ans;
s = "aaaabbcc";
ans = isValid(s);
console.log(ans); //NO
s = "aabbccddeefghi";
ans = isValid(s);
console.log(ans); //NO
