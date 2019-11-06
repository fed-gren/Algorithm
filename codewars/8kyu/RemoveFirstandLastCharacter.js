/**
 * @url https://www.codewars.com/kata/remove-first-and-last-character/train/javascript
 */

const { Test } = require("../kata");

function removeChar(str) {
  let len = str.length;
  return [...str].filter((_, idx) => idx !== 0 && idx !== len - 1).join('');
};

Test.describe("Tests", function () {

  Test.assertEquals(removeChar('eloquent'), 'loquen');
  Test.assertEquals(removeChar('country'), 'ountr');
  Test.assertEquals(removeChar('person'), 'erso');
  Test.assertEquals(removeChar('place'), 'lac');

});
