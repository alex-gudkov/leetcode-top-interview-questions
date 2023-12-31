/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const digits = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && digits[s[i]] < digits[s[i + 1]]) {
      res -= digits[s[i]];
    } else {
      res += digits[s[i]];
    }
  }

  return res;
}

/**
 * @param {string} s
 * @return {number}
 */
function _romanToInt(s) {
  const digits = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  let res = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (digits[s[i]] < digits[s[i + 1]]) {
      res -= digits[s[i]];
    } else {
      res += digits[s[i]];
    }
  }

  return res + digits[s[s.length - 1]];
}

/**
 * @param {string} s
 * @return {number}
 */
function __romanToInt(s) {
  const digits = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  const nums = s.split('').map((ch) => digits[ch]);

  return nums.reduce((res, num, i) => (num < nums[i + 1] ? res - num : res + num), 0);
}

const s = 'MCMXCIV';

console.log(romanToInt(s));
console.log(_romanToInt(s));
console.log(__romanToInt(s));
