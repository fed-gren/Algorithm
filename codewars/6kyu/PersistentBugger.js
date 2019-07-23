const getNumTextArray = n =>
  Number(n)
    .toString()
    .split("");

const persistence = num => {
  let ans = 0;
  let arr = getNumTextArray(num);

  if (arr.length > 1) {
    while (arr.length > 1) {
      arr = getNumTextArray(arr.reduce((acc, cur) => acc * Number(cur), 1));
      ans += 1;
    }
  }
  return ans;
};

console.log(persistence(39)); //,3);
console.log(persistence(4)); //,0);
console.log(persistence(25)); //,2);
console.log(persistence(999)); //,4);
