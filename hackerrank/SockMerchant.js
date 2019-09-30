// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let ans = 0;
  while (ar.length != 0) {
    const front = ar.shift();
    const idx = ar.indexOf(front);
    if (idx > -1) {
      ar = ar.filter((c, arrIdx) => arrIdx !== idx);
      ans += 1;
    }
  }

  return ans;
}

let n, arr, ans;

n = 7;
arr = [1, 2, 1, 2, 1, 3, 2];
ans = sockMerchant(n, arr);
console.log(ans); //2

n = 9;
arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
ans = sockMerchant(n, arr);
console.log(ans); //3

n = 10;
arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
ans = sockMerchant(n, arr);
console.log(ans); //4
