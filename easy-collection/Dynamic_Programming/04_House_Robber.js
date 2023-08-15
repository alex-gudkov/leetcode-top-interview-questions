/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  const sums = new Array(nums.length + 1);

  sums[0] = 0;
  sums[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const sumIfSkip = sums[i];
    const sumIfRobe = sums[i - 1] + nums[i];

    sums[i + 1] = Math.max(sumIfSkip, sumIfRobe);
  }

  return sums[nums.length];
}

const nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
