/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const maxSums = new Array(nums.length + 1);

  maxSums[0] = 0;
  maxSums[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSums[i + 1] = Math.max(maxSums[i], maxSums[i - 1] + nums[i]);
  }

  return maxSums[nums.length];
}

const nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
