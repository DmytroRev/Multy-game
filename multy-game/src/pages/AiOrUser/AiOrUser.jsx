import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AiOrUser() {
  const naviagate = useNavigate();
  const backToPage = useRef(location.state ?? "/");

  const handleChoise = (mode) => {
    naviagate("/ticTacToe", { state: { mode } });
  };
  return (
    <div>
      <div>
        <button>
          <Link to={backToPage.current}>Go back</Link>
        </button>
      </div>
      <h2>Выбери режим игры</h2>
      <button onClick={() => handleChoise("computer")}>
        Играть против компьютера
      </button>
      <button onClick={() => handleChoise("human")}>
        Играть против человека
      </button>
    </div>
  );
}
