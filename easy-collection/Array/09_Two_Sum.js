/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numsLength = nums.length;
  const numsHashMap = {};
  let key;
  let i, j;

  for (i = 0; i < numsLength; i++) {
    key = nums[i].toString();

    while (numsHashMap[key] !== undefined) {
      key += '-';
    }

    numsHashMap[key] = i;
  }

  console.log(numsHashMap);

  for (i = 0; i < numsLength; i++) {
    key = (target - nums[i]).toString();
    j = numsHashMap[key];

    while (j === i) {
      key += '-';
      j = numsHashMap[key];
    }

    if (j) {
      return [i, j];
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function _twoSum(nums, target) {
  const numsHashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];

    if (numsHashMap.has(sub)) {
      return [numsHashMap.get(sub), i];
    }

    numsHashMap.set(nums[i], i);
  }
}

const nums = [3, 3, 3];
const target = 6;

console.log(_twoSum(nums, target));
