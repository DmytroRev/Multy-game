import PropTypes from "prop-types";
import clsx from "clsx";
import "./AiOrUser.css";
const AiOrUser = ({
  gameMode,
  setGameMode,
  difficulty,
  setDifficulty,
  firstMove,
  setFirstMove,
}) => {
  return (
    <div>
      <h2>Select Game Mode</h2>
      <select value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
        <option value="human">Human vs Human</option>
        <option value="computer">Human vs Computer</option>
      </select>

      {gameMode === "computer" && (
        <>
          <h2>Select Difficulty</h2>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <h2>Who goes first?</h2>
          <div>
            <button
              className={clsx("first-move-btn", {
                selected: firstMove === "player",
              })}
              onClick={() => setFirstMove("player")}
            >
              Player
            </button>
            <button
              className={clsx("first-move-btn", {
                selected: firstMove === "computer",
              })}
              onClick={() => setFirstMove("computer")}
            >
              Computer
            </button>
          </div>
        </>
      )}
    </div>
  );
};

AiOrUser.propTypes = {
  gameMode: PropTypes.string.isRequired,
  setGameMode: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  firstMove: PropTypes.string.isRequired,
  setFirstMove: PropTypes.func.isRequired,
};

export default AiOrUser;
