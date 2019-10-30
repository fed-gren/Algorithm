/**
 * @url https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  const len = nums.length;
  let gap = 0;

  nums.forEach((cur, idx) => {
    obj[cur] = idx;
  });

  for (let i = 0; i < len; i++) {
    gap = target - nums[i];
    if(i === obj[gap] || obj[gap] === undefined) continue;
    return [i, obj[gap]];
  }
};