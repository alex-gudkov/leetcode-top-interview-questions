/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const nums1HashMap = {};
  const nums = [];

  for (let num1 of nums1) {
    const key = num1.toString();

    if (!nums1HashMap[key]) {
      nums1HashMap[key] = 0;
    }

    nums1HashMap[key]++;
  }

  for (let num2 of nums2) {
    const key = num2.toString();

    if (nums1HashMap[key] && nums1HashMap[key] > 0) {
      nums1HashMap[key]--;

      nums.push(num2);
    }
  }

  return nums;
}

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
