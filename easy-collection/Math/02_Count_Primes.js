/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  if (n <= 2) {
    return 0;
  }

  const primes = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i; j * i < n; j++) {
        primes[i * j] = false;
      }
    }
  }

  let count = 0;

  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++;
    }
  }

  return count;
}

/**
 * @param {number} n
 * @return {number}
 */
function _countPrimes(n) {
  if (n <= 2) {
    return 0;
  }

  const isNotPrimeNums = new Uint8Array(n);
  let count = 0;

  for (let num = 2; num < n; num++) {
    if (isNotPrimeNums[num]) {
      continue;
    }

    count++;

    for (let mult = num * num; mult < n; mult += num) {
      isNotPrimeNums[mult] = 1;
    }
  }

  return count;
}

/**
 * @param {number} n
 * @return {number}
 */
function __countPrimes(n) {
  if (n <= 2) {
    return 0;
  }

  function isPrime(num) {
    const numSqrt = Math.trunc(Math.sqrt(num));

    for (let i = 3; i <= numSqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  let count = 0;

  for (let i = 1; i <= n; i += 2) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

console.log(countPrimes(30));
console.log(_countPrimes(30));
console.log(__countPrimes(30));
