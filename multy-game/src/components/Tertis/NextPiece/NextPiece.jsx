import PropTypes from "prop-types";

const NextPiece = ({ piece }) => {
  if (!piece) return null;

  const { shape, color } = piece;

  return (
    <div>
      <h2>Next Piece</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${shape[0].length}, 20px)`,
          //   gridGap: "1px", // добавляем промежуток между ячейками
        }}
      >
        {shape.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: cell ? color : "transparent",
                border: cell
                  ? "1px solid rgba(255, 255, 255, 0.7)"
                  : "transparent",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

NextPiece.propTypes = {
  piece: PropTypes.shape({
    shape: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default NextPiece;
