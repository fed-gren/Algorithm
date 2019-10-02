/**
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */
// Complete the minimumBribes function below.
function minimumBribes(q) {
  let cnt = 0;
  let gap = 0;
  const len = q.length;

  for (let i = 0; i < len; i += 1) {
    gap = q[i] - (i + 1);
    if (gap > 2) {
      console.log("Too chaotic");
      return;
    }
    else {
      const temp = q.slice(i + 1).filter(n => q[i] > n).length;
      cnt += temp;
    }
  }
  console.log(cnt);
}

let q, ans;
q = [2, 1, 5, 3, 4];
ans = minimumBribes(q);

q = [2, 5, 1, 3, 4];
ans = minimumBribes(q);

q = [1, 2, 5, 3, 7, 8, 6, 4];
ans = minimumBribes(q); //7

//위 코드는 시간초과 남
//아래는 O(N) 솔루션
// function minimumBribes(q) {
//   let swaps = 0;
//   let min = q.length;
//   for (var i = q.length - 1; i >= 0; i--) {
//     if (q[i] - i > 3) {
//       console.log(`Too chaotic`);
//       return;
//     }
//     if (q[i] > i + 1) {
//       swaps += (q[i] - (i + 1));
//     } else {
//       if (min > q[i]) {
//         min = q[i];
//       } else if (q[i] != min) {
//         swaps++;
//       }
//     }
//   }

//   console.log(swaps);
// }