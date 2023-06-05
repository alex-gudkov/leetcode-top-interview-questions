/*
1. Remove Duplicates from Sorted Array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
}

const nums = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5];

console.log(removeDuplicates(nums));
console.log(nums);
