/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const ch of s) {
    if (pairs[ch]) {
      stack.push(ch);
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function _isValid(s) {
  const stack = [];

  for (const ch of s) {
    if (ch === '{' || ch === '[' || ch === '(') {
      stack.push(ch);
    } else {
      const p = stack.pop();

      if ((ch === '}' && p !== '{') || (ch === ']' && p !== '[') || (ch === ')') & (p !== '(')) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const s = '()[{]}';

console.log(isValid(s));
console.log(_isValid(s));
