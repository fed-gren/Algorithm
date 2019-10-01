//www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function countingValleys(n, s) {
  let ans = 0;
  let before = 0;
  s = s.split("");
  const first = s.shift();
  let current = first === "U" ? 1 : -1;
  s.forEach(c => {
    before = current;
    current = c === "U" ? current + 1 : current - 1;
    if (current === 0 && before === -1) ans += 1;
    before = current;
  });
  return ans;
}

let n, s, ans;
n = 8;
s = "UDDDUDUU";
ans = countingValleys(n, s);
console.log(ans); //1
