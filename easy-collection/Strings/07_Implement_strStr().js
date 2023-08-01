/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => haystack.indexOf(needle);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function _strStr(s1, s2) {
  if (s2 === '' || s2 === s1) {
    return 0;
  }

  if (s1.length < s2.length) {
    return -1;
  }

  for (let i = 0; i < s1.length - s2.length + 1; i++) {
    if (s1[i] === s2[0]) {
      for (let j = 0; j < s2.length && s2[j] === s1[i + j]; j++) {
        if (j === s2.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
}

const haystack = 'asadbutsad';
const needle = 'sad';

console.log(strStr(haystack, needle));
