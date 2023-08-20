/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i) {
      return i;
    }
  }

  return nums.length;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function __missingNumber(nums) {
  const n = nums.length;
  const numsSum = nums.reduce((res, num) => res + num, 0);
  const expectSum = ((n + 1) / 2) * n;

  return expectSum - numsSum;
}
