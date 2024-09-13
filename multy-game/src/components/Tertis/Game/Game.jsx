import { useCallback, useEffect, useState } from "react";
import Level from "../Level/Level";
import RestartButton from "../RestartButton/RestartButton";
import Score from "../Score/Score";
import Board from "../Board/Board";
import NextPiece from "../NextPiece/NextPiece";
import "./Game.css";
import {
  createEmptyBoard,
  drawTetromino,
  generateRandomPiece,
  getInitialPosition,
} from "../../../utils/tetrominoes";
import { handleKeyPress } from "../../../utils/tetrominoes";

const Game = () => {
  const boardWidth = 10; // ширина поля
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentTetromino, setCurrentTetromino] = useState(
    generateRandomPiece()
  );
  const [position, setPosition] = useState(
    getInitialPosition(currentTetromino, boardWidth)
  ); // Установите начальную позицию
  const [nextPiece, setNextPiece] = useState(generateRandomPiece());

  const updateBoard = useCallback(() => {
    setBoard((prevBoard) =>
      drawTetromino(prevBoard, currentTetromino, position.x, position.y)
    );
  }, [currentTetromino, position]);

  useEffect(() => {
    updateBoard();
  }, [updateBoard]);

  const moveTetromino = useCallback((dx, dy) => {
    setPosition((pos) => ({
      x: pos.x + dx,
      y: pos.y + dy,
    }));
  }, []);

  const handleKeyPressCallback = useCallback(
    (event) => {
      handleKeyPress(event, moveTetromino);
    },
    [moveTetromino]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressCallback);
    return () => {
      window.removeEventListener("keydown", handleKeyPressCallback);
    };
  }, [handleKeyPressCallback]);

  const handleRestart = () => {
    setBoard(createEmptyBoard());
    const newTetromino = generateRandomPiece();
    setCurrentTetromino(newTetromino);
    setPosition(getInitialPosition(newTetromino, boardWidth)); // Обновите позицию при перезапуске
    setNextPiece(generateRandomPiece());
  };

  return (
    <div className="containerTetrisGame">
      <Board board={board} />
      <div className="sidePanel">
        <Score />
        <Level />
        <NextPiece piece={nextPiece} />
        <RestartButton onRestart={handleRestart} />
      </div>
    </div>
  );
};

export default Game;
