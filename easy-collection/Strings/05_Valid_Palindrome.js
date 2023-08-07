/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const t = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const tLength = t.length;
  const tHalfLength = Math.floor(tLength / 2);

  for (let i = 0; i < tHalfLength; i++) {
    if (t[i] !== t[tLength - i - 1]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function _isPalindrome(s) {
  const t = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

  for (let i = 0, j = t.length - 1; i <= j; i++, j--) {
    if (t.charAt(i) !== t.charAt(j)) {
      return false;
    }
  }

  return true;
}

// s.replace(/\W/g, '')
// \W === [^0-9a-zA-Z_]
// s.replace(/[^0-9a-z]/gi, '')

const s = 'A man, a plan, a canal: Panama';

console.log(isPalindrome(s));
