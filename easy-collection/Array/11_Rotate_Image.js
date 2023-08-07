/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  const matrixSize = matrix.length;
  let temp;

  for (let i = 0; i < matrixSize; i++) {
    for (let j = i + 1; j < matrixSize; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize / 2; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrixSize - j - 1];
      matrix[i][matrixSize - j - 1] = temp;
    }
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function _rotate(matrix) {
  const matrixSize = matrix.length;
  const middle = Math.floor(matrixSize / 2);
  let len, opp, temp;

  for (let i = 0; i < middle; i++) {
    len = matrixSize - 2 * i - 1;
    opp = matrixSize - 1 - i;

    for (let j = 0; j < len; j++) {
      temp = matrix[i][i + j];
      matrix[i][i + j] = matrix[opp - j][i];
      matrix[opp - j][i] = matrix[opp][opp - j];
      matrix[opp][opp - j] = matrix[i + j][opp];
      matrix[i + j][opp] = temp;
    }
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function __rotate(matrix) {
  const matrixSize = matrix.length;
  let temp;

  matrix.reverse();

  for (let i = 0; i < matrixSize; i++) {
    for (let j = i + 1; j < matrixSize; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(matrix);
__rotate(matrix);
console.log(matrix);
