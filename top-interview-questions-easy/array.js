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
