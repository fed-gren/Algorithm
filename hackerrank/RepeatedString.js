/**
 * https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
function repeatedString(s, n) {
  const sArr = s.split("");
  const sLen = s.length;
  const aOriginNum = sArr.filter(c => c === "a").length;

  let aInfiniteNum = aOriginNum * Math.floor(n / sLen);
  let gap = n % sLen;
  if (gap === 0) return aInfiniteNum;

  const cutString = s.substring(0, gap);
  const cutArr = cutString.split("");
  const aCutNum = cutArr.filter(c => c === "a").length;
  aInfiniteNum += aCutNum;
  return aInfiniteNum;
}

let s, n, ans;
s = "aba";
n = 10;
ans = repeatedString(s, n);
console.log(ans); //7

s = "a";
n = 1000000000000;
ans = repeatedString(s, n);
console.log(ans); //1000000000000
