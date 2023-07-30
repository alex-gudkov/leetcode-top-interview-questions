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

/**
 * @param {number[]} nums
 * @return {number}
 */
function _removeDuplicates(nums) {
  nums.splice(0, nums.length, ...new Set(nums));

  return nums.length;
}

const arr = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5];

console.log(_removeDuplicates(arr));
console.log(arr);
