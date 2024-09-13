import TicTacToe from "../../components/TicTacToe/TicTacToe";
import "./TicTacToeBackground.scss";

export default function TicTacToePage() {
  return (
    <div className="backgroundEffects">
      {/* Анимированные шарики */}
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>

      {/* Компонент TicTacToe */}
      <div className="tic-tac-toe-container">
        <TicTacToe />
      </div>
    </div>
  );
}
