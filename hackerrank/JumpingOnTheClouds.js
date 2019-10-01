// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function jumpingOnClouds(c) {
  let curIdx = 0;
  let cnt = 0;
  const len = c.length;
  while (true) {
    if (curIdx === len - 1) break;

    if (c[curIdx + 2] === 0) curIdx += 2;
    else curIdx += 1;
    cnt += 1;
  }
  return cnt;
}

let c, ans;

c = [0, 0, 1, 0, 0, 1, 0];
ans = jumpingOnClouds(c); //4
console.log(ans);

c = [0, 0, 0, 0, 1, 0];
ans = jumpingOnClouds(c); //3
console.log(ans);
