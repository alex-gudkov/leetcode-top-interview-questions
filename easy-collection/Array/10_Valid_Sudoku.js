/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const BOARD_SIZE = 9;
  const BOX_SIZE = 3;
  let key;
  let iBox, jBox;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const rowHashMap = {
      '.': 999,
      '1': 1,
      '2': 1,
      '3': 1,
      '4': 1,
      '5': 1,
      '6': 1,
      '7': 1,
      '8': 1,
      '9': 1,
    };
    const columnHashMap = {
      '.': 999,
      '1': 1,
      '2': 1,
      '3': 1,
      '4': 1,
      '5': 1,
      '6': 1,
      '7': 1,
      '8': 1,
      '9': 1,
    };
    const boxHashMap = {
      '.': 999,
      '1': 1,
      '2': 1,
      '3': 1,
      '4': 1,
      '5': 1,
      '6': 1,
      '7': 1,
      '8': 1,
      '9': 1,
    };

    for (let j = 0; j < BOARD_SIZE; j++) {
      key = board[i][j];
      rowHashMap[key]--;

      if (rowHashMap[key] < 0) {
        return false;
      }

      key = board[j][i];
      columnHashMap[key]--;

      if (columnHashMap[key] < 0) {
        return false;
      }

      iBox = ~~(j / BOX_SIZE) + ~~(i / BOX_SIZE) * BOX_SIZE;
      jBox = (i % BOX_SIZE) * BOX_SIZE + (j % BOX_SIZE);
      key = board[iBox][jBox];
      boxHashMap[key]--;

      if (boxHashMap[key] < 0) {
        return false;
      }
    }
  }

  return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function _isValidSudoku(board) {
  const BOARD_SIZE = 9;
  const BOX_SIZE = 3;
  let key;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const rowHashMap = {};
    const columnHashMap = {};
    const boxHashMap = {};

    for (let j = 0; j < BOARD_SIZE; j++) {
      key = board[i][j];

      if (key !== '.') {
        if (rowHashMap[key]) {
          return false;
        }

        rowHashMap[key] = true;
      }

      key = board[j][i];

      if (key !== '.') {
        if (columnHashMap[key]) {
          return false;
        }

        columnHashMap[key] = true;
      }

      key =
        board[~~(j / BOX_SIZE) + ~~(i / BOX_SIZE) * BOX_SIZE][
          (i % BOX_SIZE) * BOX_SIZE + (j % BOX_SIZE)
        ];

      if (key !== '.') {
        if (boxHashMap[key]) {
          return false;
        }

        boxHashMap[key] = true;
      }
    }
  }

  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(_isValidSudoku(board));
