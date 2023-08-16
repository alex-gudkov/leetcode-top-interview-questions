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
