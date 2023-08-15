/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr[i - 1] = 'FizzBuzz';
      } else {
        arr[i - 1] = 'Fizz';
      }
    } else if (i % 5 === 0) {
      arr[i - 1] = 'Buzz';
    } else {
      arr[i - 1] = i.toString();
    }
  }

  return arr;
}

/**
 * @param {number} n
 * @return {string[]}
 */
function _fizzBuzz(n) {
  const arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr[i - 1] = 'FizzBuzz';
      } else {
        arr[i - 1] = 'Fizz';
      }
    } else if (i % 5 === 0) {
      arr[i - 1] = 'Buzz';
    } else {
      arr[i - 1] = i.toString();
    }
  }

  return arr;
}

/**
 * @param {number} n
 * @return {string[]}
 */
function __fizzBuzz(n) {
  const arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      arr[i - 1] = 'Fizz';

      if (i % 5 === 0) {
        arr[i - 1] += 'Buzz';
      }
    } else if (i % 5 === 0) {
      arr[i - 1] = 'Buzz';
    } else {
      arr[i - 1] = i.toString();
    }
  }

  return arr;
}

const n = 15;

console.log(fizzBuzz(n));
