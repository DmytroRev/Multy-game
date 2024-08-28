const ComputerMove = (data, difficulty) => {
  if (isGameOver(data)) {
    console.log("Game Over");
    return null;
  }

  let move;
  switch (difficulty) {
    case "easy":
      move = easyMove(data);
      break;
    case "medium":
      move = mediumMove(data);
      break;
    case "hard":
      move = hardMove(data);
      break;
    default:
      move = easyMove(data);
  }
  return move;
};

const isGameOver = (data) => {
  return checkWinner(data, "x") || checkWinner(data, "o") || !data.includes("");
};

const easyMove = (data) => {
  let availableMoves = data
    .map((val, id) => (val === "" ? id : null))
    .filter((id) => id !== null);
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

const mediumMove = (data) => {
  let playerWinningMove = findWinningMove(data, "x");
  if (playerWinningMove !== null) return playerWinningMove;
  return easyMove(data);
};

const hardMove = (data) => {
  return minimax(data, "o").id;
};

const findWinningMove = (data, player) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winPatterns) {
    if (data[a] === player && data[b] === player && data[c] === "") return c;
    if (data[a] === player && data[b] === "" && data[c] === player) return b;
    if (data[a] === "" && data[b] === player && data[c] === player) return a;
  }
  return null;
};

const minimax = (newData, player) => {
  const availableSpots = newData.reduce(
    (acc, val, id) => (val === "" ? [...acc, id] : acc),
    []
  );
  if (checkWinner(newData, "x")) return { score: -10 };
  if (checkWinner(newData, "o")) return { score: 10 };
  if (availableSpots.length === 0) return { score: 0 };

  let moves = [];

  for (let spot of availableSpots) {
    let move = {};
    move.id = spot;

    newData[spot] = player;
    if (player === "o") {
      let result = minimax(newData, "x");
      move.score = result.score;
    } else {
      let result = minimax(newData, "o");
      move.score = result.score;
    }

    newData[spot] = "";
    moves.push(move);
  }

  let bestMove;
  if (player === "o") {
    let bestScore = -10000;
    for (let move of moves) {
      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  } else {
    let bestScore = 10000;
    for (let move of moves) {
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move;
      }
    }
  }

  return bestMove;
};

const checkWinner = (board, player) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winPatterns) {
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
};

export default ComputerMove;
