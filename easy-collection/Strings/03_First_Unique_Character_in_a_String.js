/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const sHashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sHashMap.has(s[i])) {
      sHashMap.set(s[i], -1);
    } else {
      sHashMap.set(s[i], i);
    }
  }

  for (const value of sHashMap.values()) {
    if (value !== -1) {
      return value;
    }
  }

  return -1;
}

/**
 * @param {string} s
 * @return {number}
 */
function _firstUniqChar(s) {
  const sHashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sHashMap[s[i]] !== undefined) {
      sHashMap[s[i]] = -1;
    } else {
      sHashMap[s[i]] = i;
    }
  }

  for (const key in sHashMap) {
    if (sHashMap[key] !== -1) {
      return sHashMap[key];
    }
  }

  return -1;
}

/**
 * @param {string} s
 * @return {number}
 */
function __firstUniqChar(s) {
  const sHashMap = {};

  for (const char of s) {
    if (sHashMap[char]) {
      sHashMap[char]++;
    } else {
      sHashMap[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (sHashMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

/**
 * @param {string} s
 * @return {number}
 */
function ___firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
}

const s = 'qwerty0qwerty';

console.log(__firstUniqChar(s));
