/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
function isBadVersion(version) {
  // ...
}

/**
 * @param {Function} isBadVersion
 * @return {Function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
  };
}

/**
 * @param {Function} isBadVersion
 * @return {Function}
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let begin = 1;
    let end = n;
    let i = -1;

    while (begin <= end) {
      const mid = Math.trunc((begin + end) / 2);

      if (isBadVersion(mid)) {
        end = mid - 1;
        i = mid;
      } else {
        begin = mid + 1;
      }
    }

    return i;
  };
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function _solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let begin = 1;
    let end = n;

    while (begin <= end) {
      const mid = Math.floor((begin + end) / 2);

      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        begin = mid + 1;
      }
    }

    return begin;
  };
}
