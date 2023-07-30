/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  nums.unshift(...nums.splice(nums.length - (k % nums.length)));
}

const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(nums);
rotate(nums, 3);
console.log(nums);
