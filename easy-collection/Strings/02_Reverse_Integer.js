/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const xReverse =
    x < 0
      ? -parseInt(Math.abs(-x).toString().split('').reverse().join(''))
      : parseInt(Math.abs(x).toString().split('').reverse().join(''));

  if (xReverse < -(2 ** 31) || xReverse > 2 ** 31 - 1) {
    return 0;
  }

  return xReverse;
}

/**
 * @param {number} x
 * @return {number}
 */
function _reverse(x) {
  const xAbsReversed = Math.abs(x).toString().split('').reverse().join('');

  if (xAbsReversed > 2 ** 31) {
    return 0;
  }

  return xAbsReversed * Math.sign(x);
}

/**
 * @param {number} x
 * @return {number}
 */
function __reverse(x) {
  const xSign = x < 0 ? -1 : 1;
  let result = 0;

  x *= xSign;

  while (x > 0) {
    result *= 10;
    result += x % 10;
    x = Math.trunc(x / 10);
  }

  if (result > 2 ** 31) {
    return 0;
  }

  return result * xSign;
}

const x = 1534236469;

console.log(__reverse(x));
