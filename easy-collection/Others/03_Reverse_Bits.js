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

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function __reverseBits(n) {
  let nRev = 0;

  for (let i = 0; i < 32; i++) {
    nRev <<= 1;
    nRev += n & 1;

    n >>>= 1;
  }

  return nRev >>> 0;
}

console.log(reverseBits(3221225471));
console.log(_reverseBits(3221225471));
console.log(__reverseBits(3221225471));
