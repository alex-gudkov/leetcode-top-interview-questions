/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const sums = new Array(nums.length);

  sums[0] = nums[0];
  sums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const sumIfRobe = sums[i - 2] + nums[i];
    const sumIfSkip = sums[i - 1];

    sums[i] = Math.max(sumIfRobe, sumIfSkip);
  }

  return sums[nums.length - 1];
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

/**
 * @param {number[]} nums
 * @return {number}
 */
function __rob(nums, i = 0) {
  if (i >= nums.length) {
    return 0;
  }

  const sumIfSkip = __rob(nums, i + 1);
  const sumIfRob = nums[i] + __rob(nums, i + 2);

  return Math.max(sumIfSkip, sumIfRob);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function ___rob(nums, i = 0, memo = {}) {
  const key = i.toString();

  if (key in memo) {
    return memo[key];
  }

  if (i >= nums.length) {
    return 0;
  }

  const sumIfSkip = ___rob(nums, i + 1, memo);
  const sumIfRob = nums[i] + ___rob(nums, i + 2, memo);

  memo[key] = Math.max(sumIfSkip, sumIfRob);

  return memo[key];
}

const nums = [2, 7, 9, 3, 1];

console.log(rob(nums));
