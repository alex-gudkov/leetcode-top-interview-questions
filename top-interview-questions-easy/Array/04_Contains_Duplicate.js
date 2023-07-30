/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  return new Set(nums).size === nums.length;
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
