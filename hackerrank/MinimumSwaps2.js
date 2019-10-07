/**
 * https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * array, sort
 */
function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    while (i + 1 !== arr[i]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i]
      arr[i] = temp;
      swap += 1;
    }
  }
  return swap;
}

let arr, ans;
arr = [4, 3, 1, 2];
ans = minimumSwaps(arr);
console.log(ans); //3

arr = [2, 3, 4, 1, 5];
ans = minimumSwaps(arr);
console.log(ans); //3

arr = [1, 3, 5, 2, 4, 6, 7];
ans = minimumSwaps(arr);
console.log(ans); //3