const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board, player) => {
  for (let [a, b, c] of winningConditions) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === player
    ) {
      return true;
    }
  }
  return false;
};

const minimax = (board, depth, isMaximizing) => {
  const scores = {
    X: -10,
    O: 10,
    tie: 0,
  };

  if (checkWinner(board, "O")) return scores.O;
  if (checkWinner(board, "X")) return scores.X;
  if (board.every((cell) => cell !== "")) return scores.tie;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const getBestMove = (board) => {
  let bestMove = -1;
  let bestScore = -Infinity;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

export default function ComputerLogic(board) {
  return getBestMove(board);
}
