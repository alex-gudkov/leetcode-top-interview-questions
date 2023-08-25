/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const rows = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    rows[i] = new Array(i + 1);
    rows[i][0] = 1;
    rows[i][i] = 1;

    for (let j = 1; j < i; j++) {
      rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
    }
  }

  return rows;
}

const numRows = 6;

console.log(generate(numRows));
