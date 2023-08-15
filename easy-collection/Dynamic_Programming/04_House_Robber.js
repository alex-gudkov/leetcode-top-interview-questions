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

/**
 * @param {number[]} nums
 * @return {number}
 */
function _rob(nums) {
  let sum = 0;
  let sumPrev = 0;

  for (let i = 0; i < nums.length; i++) {
    const maxSum = Math.max(nums[i] + sumPrev, sum);

    sumPrev = sum;
    sum = maxSum;
  }

  return sum;
}

const nums = [2, 7, 9, 3, 1];

console.log(_rob(nums));
