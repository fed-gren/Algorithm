/**
 * @url https://www.codewars.com/kata/5715eaedb436cf5606000381
 */

const { Test } = require("../kata");

function positiveSum(arr) {
  return arr
    .filter(num => num > 0)
    .reduce((acc, num) => acc + num, 0);
}

// function positiveSum(arr) {
//   return arr
//   .reduce((acc, num) => num > 0 ? acc + num : acc, 0);
// }

Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
Test.assertEquals(positiveSum([]), 0);
Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);