import { useCallback, useEffect, useRef, useState } from "react";
import css from "./ComputerPlayer.module.css";
import ComputerLogic from "./ComputerLogic/ComputerLogic";
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

export default function ComputerPlayer() {
  const [board, setBoard] = useState(() => {
    const savedBoard = localStorage.getItem("Board");
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill("");
  });
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [statusMessage, setStatusMessage] = useState("It's X's turn");
  const lineRef = useRef(null);

  const checkForWin = useCallback(
    (newBoard) => {
      let roundWon = false;
      for (let [a, b, c] of winningConditions) {
        if (
          newBoard[a] &&
          newBoard[a] === newBoard[b] &&
          newBoard[a] === newBoard[c]
        ) {
          roundWon = true;
          drawWinningLine(a, c);
          break;
        }
      }
      if (roundWon) {
        setStatusMessage(`Player ${currentPlayer} has won!`);
        setGameActive(false);
      } else if (!newBoard.includes("")) {
        setStatusMessage("Game ended in a draw!");
      }
    },
    [currentPlayer]
  );

  const switchPlayer = useCallback(() => {
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
    setStatusMessage(`It's ${nextPlayer}'s turn`);
  }, [currentPlayer]);

  const computerMove = useCallback(() => {
    const move = ComputerLogic(board);
    if (move !== undefined) {
      const newBoard = [...board];
      newBoard[move] = "O";
      setBoard(newBoard);
      checkForWin(newBoard);
      switchPlayer();
    }
  }, [board, checkForWin, switchPlayer]);

  useEffect(() => {
    localStorage.setItem("Board", JSON.stringify(board));
  }, [board]);

  useEffect(() => {
    const savedLine = JSON.parse(localStorage.getItem("winningLine"));
    if (savedLine) {
      const [a, c] = savedLine;
      drawWinningLine(a, c);
    }
  }, []);

  useEffect(() => {
    if (currentPlayer === "O" && gameActive) {
      const timeoutId = setTimeout(() => {
        computerMove();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentPlayer, gameActive, computerMove]);

  const handleClick = (index) => {
    if (board[index] !== "" || !gameActive || currentPlayer === "O") return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    checkForWin(newBoard);
    switchPlayer();
  };

  const drawWinningLine = (a, c) => {
    const cellA = document.querySelector(`[data-index="${a}"]`);
    const cellC = document.querySelector(`[data-index="${c}"]`);

    const startX = cellA.offsetLeft + cellA.offsetWidth / 2;
    const startY = cellA.offsetTop + cellA.offsetHeight / 2;
    const endX = cellC.offsetLeft + cellC.offsetWidth / 2;
    const endY = cellC.offsetTop + cellC.offsetHeight / 2;

    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    lineRef.current.style.width = `${length}px`;
    lineRef.current.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
    lineRef.current.style.display = "block";
    localStorage.setItem("winningLine", JSON.stringify([a, c]));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameActive(true);
    setStatusMessage("It's X's turn");
    lineRef.current.style.display = "none";
    localStorage.removeItem("winningLine");
  };

  return (
    <div id={css.game}>
      <div id={css.status}>{statusMessage}</div>
      <div className={css.board}>
        <div id={css.line} className={css.line} ref={lineRef}></div>
        {board.map((cell, index) => (
          <div
            key={index}
            className={css.cell}
            data-index={index}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button id={css.reset} onClick={resetGame}>
        Restart game
      </button>
    </div>
  );
}
