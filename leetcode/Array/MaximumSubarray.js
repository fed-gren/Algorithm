/**
 * @url https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var prev = Number.MIN_VALUE;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};

let nums, ans;
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
ans = maxSubArray(nums);
console.log(ans); //6