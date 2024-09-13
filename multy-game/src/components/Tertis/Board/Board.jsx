import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ board }) => {
  return (
    <div className="boardTetris">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${cell ? "filled" : ""}`}
              style={{ backgroundColor: cell.color || "transparent" }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired, // Используйте объект для клетки, чтобы хранить цвет
};

export default Board;
