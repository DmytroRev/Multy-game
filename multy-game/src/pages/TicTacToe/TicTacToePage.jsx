import { useRef } from "react";
import TicTacToe from "../../components/TicTacToe/Tic";
import { Link } from "react-router-dom";

export default function TicTacToePage() {
  const backToPage = useRef(location.state ?? "/ticTacToe/select");
  return (
    <>
      <button>
        <Link to={backToPage.current}>Go back</Link>
      </button>
      <TicTacToe />
    </>
  );
}
