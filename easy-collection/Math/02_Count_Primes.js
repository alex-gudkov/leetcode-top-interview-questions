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

  let primesCount = 0;

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      primesCount++;
    }
  }

  return primesCount;
}

/**
 * @param {number} n
 * @return {number}
 */
function _countPrimes(n) {
  const isNotPrimeNums = new Array(n).fill(false);
  let res = 0;

  isNotPrimeNums[0] = true;
  isNotPrimeNums[1] = true;

  for (let num = 2; num < n; num++) {
    if (isNotPrimeNums[num]) {
      continue;
    }

    res++;

    for (let mult = num * num; mult < n; mult += num) {
      isNotPrimeNums[mult] = true;
    }
  }

  return res;
}

console.log(_countPrimes(10));
