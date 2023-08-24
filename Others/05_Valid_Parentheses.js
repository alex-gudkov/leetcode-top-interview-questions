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

const s = '()[{]}';

console.log(isValid(s));
