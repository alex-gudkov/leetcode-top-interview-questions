/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function _containsDuplicate(nums) {
  const numsHahMap = new Set();

  for (const num of nums) {
    if (numsHahMap.has(num)) {
      return true;
    }

    numsHahMap.add(num);
  }

  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function __containsDuplicate(nums) {
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}

const nums = [1, 2, 3, 3, 4, 5];

console.log(__containsDuplicate(nums));
