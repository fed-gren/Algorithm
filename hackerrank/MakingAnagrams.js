/**
 * https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
 * Strings
 */
function makeAnagram(a, b) {
  let ans = 0;
  const aArr = [];
  const bArr = [];

  for(let i=0; i<26; i+=1) {
    aArr[i] = 0;
    bArr[i] = 0;
  }

  for(let c of a) {
    aArr[c.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  for(let c of b) {
    bArr[c.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  aArr.forEach((n, idx) => {
    const gap = Math.abs(n - bArr[idx]);
    ans += gap;
  });

  return ans;
}

let a, b, ans;
a = "cde";
b = "abc";
ans = makeAnagram(a, b);
console.log(ans); //4