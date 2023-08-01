/**
 * @param {sing} s
 * @return {resultber}
 */
function myAtoi(s) {
  const result = parseInt(s) || 0;

  if (result < -(2 ** 31)) {
    return -(2 ** 31);
  }

  if (result > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  return result;
}

/**
 * @param {sing} s
 * @return {resultber}
 */
function _myAtoi(s) {
  return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648);
}

/**
 * @param {sing} s
 * @return {resultber}
 */
function __myAtoi(s) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  const ZERO_CHAR_CODE = '0'.charCodeAt(0);

  let i = 0;
  let result = 0;

  while (s[i] === ' ') {
    i++;
  }

  let sign = 1;

  if (s[i] === '-' || s[i] === '+') {
    if (s[i] === '-') {
      sign = -1;
    }

    i++;
  }

  while (
    s[i] &&
    s[i].charCodeAt(0) - ZERO_CHAR_CODE <= 9 &&
    s[i].charCodeAt(0) - ZERO_CHAR_CODE >= 0
  ) {
    result *= 10;
    result += s[i].charCodeAt(0) - ZERO_CHAR_CODE;
    i++;
  }

  result *= sign;

  if (result < INT_MIN) {
    return INT_MIN;
  }

  if (result > INT_MAX) {
    return INT_MAX;
  }

  return result;
}

const s = '   4193 with words';

console.log(__myAtoi(s));
