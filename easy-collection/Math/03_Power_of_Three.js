/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 3 !== 0) {
      return false;
    }

    n = Math.trunc(n / 3);
  }

  return true;
}

function _isPowerOfThree(n) {
  if (n < 1) {
    return false;
  }

  const log3n = Math.log(n) / Math.log(3);

  return Math.abs(log3n - Math.round(log3n)) < 1e-10;
}

function __isPowerOfThree(n) {
  const MAX_POWER_OF_3 = 1162261467;

  return n > 0 && MAX_POWER_OF_3 % n === 0;
}

console.log(isPowerOfThree(243));
console.log(_isPowerOfThree(243));
console.log(__isPowerOfThree(243));
