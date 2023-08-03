/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  const numsLength = nums.length;
  let j = 0;

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  while (j < numsLength) {
    nums[j] = 0;
    j++;
  }
}

const nums = [0, 1, 0, 3, 12];

console.log(nums);
moveZeroes(nums);
console.log(nums);
