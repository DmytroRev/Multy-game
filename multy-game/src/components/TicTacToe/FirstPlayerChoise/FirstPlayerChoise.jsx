import { useState } from "react";
import PropTypes from "prop-types";

export default function FirstPlayerChoise({ onPlayerSelect }) {
  const [selectedPlayer, setSelectedPlayer] = useState("X");
  const handleSelectPlayer = () => {
    onPlayerSelect(selectedPlayer);
  };

  return (
    <div>
      <h2>Кто начнёт первым?</h2>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            value="X"
            checked={selectedPlayer === "X"}
            onChange={() => setSelectedPlayer("X")}
          />
          Игрок Х
        </label>
        <label htmlFor="">
          <input
            type="radio"
            value="O"
            checked={selectedPlayer === "O"}
            onChange={() => setSelectedPlayer("O")}
          />
          Игрок О
        </label>
      </div>
      <button onClick={handleSelectPlayer}>Начать игру</button>
    </div>
  );
}

FirstPlayerChoise.propTypes = {
  onPlayerSelect: PropTypes.func.isRequired,
};
