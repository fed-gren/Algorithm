function isNice(arr) {
  if (arr.length === 0) return false;
  const minusArr = arr.map(n => n - 1);
  const plusArr = arr.map(n => n + 1);

  let flag, mIdx, pIdx;
  const ans = arr.every(n => {
    mIdx = minusArr.indexOf(n);
    pIdx = plusArr.indexOf(n);
    flag = mIdx >= 0 || pIdx >= 0;
    return flag;
  });
  return ans;
}

console.log(isNice([2, 10, 9, 3])); //true
console.log(isNice([3, 4, 5, 7])); //false
