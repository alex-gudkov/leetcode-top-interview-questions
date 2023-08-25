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
function _missingNumber(nums) {
  const n = nums.length;
  const numsSum = nums.reduce((res, num) => res + num, 0);
  const expectSum = ((n + 1) / 2) * n;

  return expectSum - numsSum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function __missingNumber(nums) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length;
  let mid = (l + r) / 2;

  while (l < r) {
    mid = Math.trunc((l + r) / 2);

    if (nums[mid] > mid) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function ___missingNumber(nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res ^= i;
    res ^= nums[i];
  }

  return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function ____missingNumber(nums) {
  const n = nums.length;
  let res = ((n + 1) / 2) * n;

  for (let i = 0; i < n; i++) {
    res -= nums[i];
  }

  return res;
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums));
console.log(_missingNumber(nums));
console.log(__missingNumber(nums));
console.log(___missingNumber(nums));
console.log(____missingNumber(nums));
