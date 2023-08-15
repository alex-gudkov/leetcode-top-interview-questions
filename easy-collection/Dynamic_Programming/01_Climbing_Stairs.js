/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const climbs = new Array(n + 1);

  climbs[0] = 1;
  climbs[1] = 1;

  for (let i = 2; i <= n; i++) {
    climbs[i] = climbs[i - 1] + climbs[i - 2];
  }

  return climbs[n];
}

/**
 * @param {number} n
 * @return {number}
 */
function _climbStairs(n) {
  if (n <= 1) {
    return 1;
  }

  let step1 = 1;
  let step2 = 1;
  let step3;

  for (let i = 2; i <= n; i++) {
    step3 = step1 + step2;
    step1 = step2;
    step2 = step3;
  }

  return step3;
}

/**
 * @param {number} n
 * @return {number}
 */
function __climbStairs(n) {
  if (n <= 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  return __climbStairs(n - 1) + __climbStairs(n - 2);
}

console.log(climbStairs(1), _climbStairs(1), __climbStairs(1));
console.log(climbStairs(2), _climbStairs(2), __climbStairs(2));
console.log(climbStairs(3), _climbStairs(3), __climbStairs(3));
console.log(climbStairs(4), _climbStairs(4), __climbStairs(4));
console.log(climbStairs(5), _climbStairs(5), __climbStairs(5));
