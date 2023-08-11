/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxSum = -Infinity;
  let l = 0;
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum > maxSum) {
        maxSum = sum;
        l = i;
        r = j;
      }
    }
  }

  return maxSum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function _maxSubArray(nums) {
  let maxSum = nums[0];
  let sum = 0;

  for (const num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;

    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function __maxSubArray(nums) {
  function fn(arr) {
    if (arr.length === 1) {
      return arr[0];
    }

    if (arr.length === 0) {
      return -Infinity;
    }

    let length = arr.length - 1;
    let mid = Math.floor(length / 2);
    let lMaxSumInSubArr = fn(arr.slice(0, mid));
    let rMaxSumInSubArr = fn(arr.slice(mid + 1, length + 1));
    let lMaxContiguousSum = 0;
    let rMaxContiguousSum = 0;

    for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--) {
      currContiguousSum += arr[i];
      lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
    }

    for (let i = mid + 1, currContiguousSum = 0; i <= length; i++) {
      currContiguousSum += arr[i];
      rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
    }

    return Math.max(
      lMaxContiguousSum + arr[mid] + rMaxContiguousSum,
      lMaxSumInSubArr,
      rMaxSumInSubArr,
    );
  }

  return fn(nums);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(__maxSubArray(nums));
