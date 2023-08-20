/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  const s = n.toString(2).padStart(32, '0');
  const sRev = s.split('').reverse().join('');
  const nRev = Number.parseInt(sRev, 2);

  return nRev;
}

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function _reverseBits(n) {
  return Number.parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2);
}
