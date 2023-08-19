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
