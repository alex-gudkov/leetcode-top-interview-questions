/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const numsHashMap = new Map();

  for (const num of nums) {
    const key = num;

    if (!numsHashMap.has(key)) {
      numsHashMap.set(key, 0);
    }

    numsHashMap.set(key, numsHashMap.get(key) + 1);
  }

  for (const [key, value] of numsHashMap.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
