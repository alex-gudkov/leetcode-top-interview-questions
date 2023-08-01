/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix;
      }
    }

    prefix += strs[0][i];
  }

  return prefix;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function _longestCommonPrefix(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}

const strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));
