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

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function __hammingDistance(x, y) {
  return (x ^ y).toString(2).replaceAll('0', '').length;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function ___hammingDistance(x, y) {
  let n = x ^ y;
  let k = 0;

  while (n !== 0) {
    if ((n & 1) === 1) {
      k++;
    }

    n >>>= 1;
  }

  return k;
}

console.log(hammingDistance(1, 3));
console.log(_hammingDistance(1, 3));
console.log(__hammingDistance(1, 3));
console.log(___hammingDistance(1, 3));
