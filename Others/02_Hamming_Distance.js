/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let k = 0;

  while (x > 0 || y > 0) {
    if (x % 2 !== y % 2) {
      k++;
    }

    x = Math.trunc(x / 2);
    y = Math.trunc(y / 2);
  }

  return k;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function _hammingDistance(x, y) {
  let k = 0;

  while (x !== 0 || y !== 0) {
    if ((x & 1) !== (y & 1)) {
      k++;
    }

    x >>>= 1;
    y >>>= 1;
  }

  return k;
}
