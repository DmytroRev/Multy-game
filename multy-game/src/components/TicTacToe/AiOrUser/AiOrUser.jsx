import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
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
    <div className="select-mode">
      <div>
        <h2 className="title-ai">Обери режим гри</h2>
        {/* <Box>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Game Mode
          </InputLabel>
          <NativeSelect 
            defaultValue={30}
            onChange={(e) => setGameMode(e.target.value)}
          >
            <option value="human">Human vs Human</option>
            <option value="computer">Human vs Computer</option>
          </NativeSelect>
        </FormControl>
      </Box> */}
        <div className="button-group">
          <button
            className={clsx("mode-button", { active: gameMode === "human" })}
            onClick={() => setGameMode("human")}
          >
            Гравець
          </button>
          <button
            className={clsx("mode-button", { active: gameMode === "computer" })}
            onClick={() => setGameMode("computer")}
          >
            Комп’ютер
          </button>
        </div>
      </div>

      {gameMode === "computer" && (
        <>
          <div>
            <h2 className="title-ai">Обери складність</h2>
            <div className="button-group ">
              <button
                className={clsx("difficulty-button", {
                  active: difficulty === "easy",
                })}
                onClick={() => setDifficulty("easy")}
              >
                Легко
              </button>
              <button
                className={clsx("difficulty-button", {
                  active: difficulty === "medium",
                })}
                onClick={() => setDifficulty("medium")}
              >
                Середньо
              </button>
              <button
                className={clsx("difficulty-button", {
                  active: difficulty === "hard",
                })}
                onClick={() => setDifficulty("hard")}
              >
                Важко
              </button>
            </div>
          </div>
        </>
      )}
      {gameMode === "computer" && (
        <div>
          <h2 className="title-ai">Хто починає перший?</h2>
          <div className="div">
            <button
              className={clsx("first-move-btn", {
                selected: firstMove === "player",
              })}
              onClick={() => setFirstMove("player")}
            >
              Гравець
            </button>
            <button
              className={clsx("first-move-btn", {
                selected: firstMove === "computer",
              })}
              onClick={() => setFirstMove("computer")}
            >
              Компьютер
            </button>
          </div>
        </div>
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
