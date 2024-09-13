const tetrominoes = {
  I: [[1, 1, 1, 1]],
  J: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

function rotate(matrix) {
  return matrix[0]
    .map((_, colIndex) => matrix.map((row) => row[colIndex]))
    .reverse();
}

function isValidMove(tetromino, offsetX, offsetY, grid) {
  for (let row = 0; row < tetromino.length; row++) {
    for (let col = 0; col < tetromino[row].length; col++) {
      if (tetromino[row][col]) {
        const newX = offsetX + col;
        const newY = offsetY + row;

        if (newX < 0 || newX >= grid[0].length || newY >= grid.length) {
          return false;
        }
      }
    }
  }
  return true;
}

function moveDown(tetromino, offsetX, offsetY, grid) {
  const newOffsetY = offsetY + 1;
  if (isValidMove(tetromino, offsetX, newOffsetY, grid)) {
    return newOffsetY;
  } else {
    for (let row = 0; row < tetromino.length; row++) {
      for (let col = 0; col < tetromino[row].length; col++) {
        if (tetromino[row][col]) {
          grid;
          [offsetY + row][offsetX + col] = tetromino[row][col];
        }
      }
    }
    return 0;
  }
}

function isRowFull(row) {
  return row.every((cell) => cell !== 0);
}

function removeFullRows(grid) {
  const rowsToRemove = grid
    .map((row, index) => (isRowFull(row) ? index : null))
    .filter((index) => index !== null);

  rowsToRemove.forEach((rowIndex) => {
    grid.splice(rowIndex, 1);
    grid.unshift(Array(grid[0].length).fill(0));
  });
}

function gameLoop() {
  const newOffsetY = moveDown(currentTetromino, offsetX, offsetY, grid);
  offsetY = newOffsetY;

  removeFullRows(grid);
  drawGrid(grid);
  requestAnimationFrame(gameLoop);
}

function drawGrid(grid) {
  const canvas = document.getElementById("gameCanvas");
}
