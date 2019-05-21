//adjacentElementsProduct
function adjacentElementsProduct(inputArray) {
  let max = -1001;
  inputArray.forEach((num, idx) => {
    if (idx < inputArray.length - 1) {
      if (max < num * inputArray[idx + 1]) max = num * inputArray[idx + 1];
    }
  });
  return max;
}

let inputArray = [3, 6, -2, -5, 7, 3];
let ans = adjacentElementsProduct(inputArray);
console.log(ans);
