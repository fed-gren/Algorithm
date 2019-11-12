/**
 * @url https://leetcode.com/problems/product-of-array-except-self/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;

  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }

  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }

  return output;
};

let nums, ans;
nums = [1, 2, 3, 4];
ans = productExceptSelf(nums);
console.log(ans); //[24,12,8,6]


nums = [1, 0];
ans = productExceptSelf(nums);
console.log(ans); //[0, 1]
