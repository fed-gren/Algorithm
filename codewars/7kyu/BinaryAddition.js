/**
 * @url https://www.codewars.com/kata/binary-addition/train/javascript
 */

const { Test } = require("../kata");

function addBinary(a, b) {
  return Number(a + b).toString(2);
}

Test.describe("addBinary(1,2)", function () {
  var results1 = addBinary(1, 2);
  Test.it("Should return something that isn't falsy", function () {
    Test.expect(results1, "Something is wrong, no results!");
  });
  Test.it("Should return \"11\"", function () {
    Test.assertEquals(results1, "11");
  });
});