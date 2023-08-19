/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let k = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      k++;
    }

    n = Math.trunc(n / 2);
  }

  return k;
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function _hammingWeight(n) {
  const s = n.toString(2);
  let k = 0;

  for (let ch of s) {
    if (ch === '1') {
      k++;
    }
  }

  return k;
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function __hammingWeight(k) {
  return k
    .toString(2)
    .split('')
    .filter((ch) => ch === '1').length;
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function ___hammingWeight(n) {
  const s = n.toString(2);

  return s === '0' ? 0 : s.match(/1/g).length;
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function ____hammingWeight(n) {
  return n.toString(2).replaceAll('0', '').length;
}
