export const createEmptyBoard = () => {
  return Array.from({ length: 18 }, () => Array(10).fill({}));
};

export const generateRandomPiece = () => {
  const pieces = [
    { shape: [[true, true, true, true]], color: "cyan" }, // I
    {
      shape: [
        [true, true],
        [true, true],
      ],
      color: "yellow",
    }, // O
    {
      shape: [
        [false, true, false],
        [true, true, true],
      ],
      color: "purple",
    }, // T
    {
      shape: [
        [true, true, false],
        [false, true, true],
      ],
      color: "green",
    }, // S
    {
      shape: [
        [false, true, true],
        [true, true, false],
      ],
      color: "red",
    }, // Z
    {
      shape: [
        [true, true, true],
        [true, false, false],
      ],
      color: "blue",
    }, // L
    {
      shape: [
        [true, true, true],
        [false, false, true],
      ],
      color: "orange",
    }, // J
  ];

  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
};

export const drawTetromino = (board, tetromino, x, y) => {
  const newBoard = board.map((row) => row.slice()); // Клонируем текущее состояние поля
  tetromino.shape.forEach((row, rIdx) => {
    row.forEach((cell, cIdx) => {
      if (cell) {
        newBoard[y + rIdx][x + cIdx] = { color: tetromino.color };
      }
    });
  });
  return newBoard;
};
// utils/keyHandlers.js
export const handleKeyPress = (event, moveTetromino) => {
  switch (event.key) {
    case "ArrowLeft":
      moveTetromino(-1, 0);
      break;
    case "ArrowRight":
      moveTetromino(1, 0);
      break;
    case "ArrowDown":
      moveTetromino(0, 1);
      break;
    case "ArrowUp":
      // Повернуть фигуру
      break;
    case " ":
      // Повернуть фигуру
      break;
    default:
      break;
  }
};
export const getInitialPosition = (tetromino, boardWidth) => {
  if (
    !tetromino ||
    !tetromino.shape ||
    !Array.isArray(tetromino.shape) ||
    tetromino.shape.length === 0
  ) {
    return { x: 0, y: 0 }; // Возвращаем дефолтное значение, если тетромино не определено
  }

  const tetrominoWidth = tetromino.shape[0].length; // предполагаем, что тетромино имеет свойство ширины
  return {
    x: Math.floor((boardWidth - tetrominoWidth) / 2), // центрируем по горизонтали
    y: 0, // начальная вертикальная позиция
  };
};
