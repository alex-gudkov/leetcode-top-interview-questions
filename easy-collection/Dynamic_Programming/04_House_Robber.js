// O(n) time | O(n) space
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

// O(n) time | O(1) space
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

// O(2^n) time | O(2^n) space
function __rob(nums, i = 0) {
  if (i >= nums.length) {
    return 0;
  }

  const sumIfSkip = __rob(nums, i + 1);
  const sumIfRob = nums[i] + __rob(nums, i + 2);

  return Math.max(sumIfSkip, sumIfRob);
}

// O(n) time | O(n) space
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

console.log(___rob(nums));
