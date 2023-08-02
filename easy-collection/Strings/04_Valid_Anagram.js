/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (t.length !== s.length) {
    return false;
  }

  const sHashMap = {};

  for (const sChar of s) {
    if (!sHashMap[sChar]) {
      sHashMap[sChar] = 0;
    }

    sHashMap[sChar]++;
  }

  for (const tChar of t) {
    if (sHashMap[tChar] === undefined || sHashMap[tChar] === 0) {
      return false;
    }

    sHashMap[tChar]--;
  }

  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function _isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charsFrequency = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charsFrequency[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charsFrequency[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < charsFrequency.length; i++) {
    if (charsFrequency[i] !== 0) {
      return false;
    }
  }

  return true;
}

const s = 'anagram';
const t = 'nagaram';

console.log(isAnagram(s, t));
