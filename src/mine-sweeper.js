const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const result = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = 0;
    }
  }

  function increse(i, j, maxi, maxj) {
    if (i >= 0 && i < maxi && j >= 0 && i < maxj) {
      result[i][j] += 1;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let maxi = matrix.length;
        let maxj = matrix[i].length;

        increse(i, j + 1, maxi, maxj);
        increse(i, j - 1, maxi, maxj);
        increse(i - 1, j, maxi, maxj);
        increse(i + 1, j, maxi, maxj);

        increse(i - 1, j + 1, maxi, maxj);
        increse(i - 1, j - 1, maxi, maxj);
        increse(i + 1, j + 1, maxi, maxj);
        increse(i + 1, j - 1, maxi, maxj);
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
