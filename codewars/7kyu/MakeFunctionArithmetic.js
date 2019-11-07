/**
 * @url https://www.codewars.com/kata/make-a-function-that-does-arithmetic/train/javascript
 */

const { Test } = require("../kata");

function arithmetic(a, b, operator) {
  const obj = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    }
  };

  return obj[operator](a, b);
}

Test.assertEquals(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
Test.assertEquals(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
Test.assertEquals(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
Test.assertEquals(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");