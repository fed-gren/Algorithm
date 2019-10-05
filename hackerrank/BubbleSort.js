/**
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Sorting - bubble sort
 */
function swap(arr, idx) {
  let temp = arr[idx];
  arr[idx] = arr[idx + 1];
  arr[idx + 1] = temp;
}

function bubbleSort(a) {
  const len = a.length;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j);
        cnt += 1;
      }
    }
  }
  return cnt;
}

function countSwaps(a) {
  let swapCnt = 0;
  let firstEl = 0;
  let lastEl = 0;
  swapCnt = bubbleSort(a);
  firstEl = a[0];
  lastEl = a[a.length - 1];

  console.log(`Array is sorted in ${swapCnt} swaps.`);
  console.log(`First Element: ${firstEl}`);
  console.log(`Last Element: ${lastEl}`);
}

let a;

a = [1, 2, 3];
countSwaps(a);

a = [3, 2, 1];
countSwaps(a);

a = [4, 2, 3, 1];
countSwaps(a);