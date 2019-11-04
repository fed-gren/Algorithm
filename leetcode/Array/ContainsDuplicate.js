/**
 * @url https://leetcode.com/problems/contains-duplicate/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {};
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]]) return true;
    else obj[nums[i]] = true;
  }
  return false;
};

// var containsDuplicate = function (nums) {
//   var obj = {};

//   for (var i = 0; i < nums.length; i++) {
//     obj[nums[i]] = obj[nums[i]] + 1 || 1;

//     if (obj[nums[i]] > 1) return true;
//   }

//   return false;
// };