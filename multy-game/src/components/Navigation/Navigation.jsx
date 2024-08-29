import { NavLink } from "react-router-dom";
import tictactoe_logo from "../../img/tictactoe_logo.jpg";
import "./Navigation.css";
export default function Navigation() {
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <p>it`s launch game tools</p>
      </div>
      <ul>
        <li className="card">
          <NavLink to="/ticTacToe" className="card-link">
            <div>
              <img
                className="tictactoe-logo"
                src={tictactoe_logo}
                alt="tic tac toe"
              />
            </div>
            <span className="card-content">Play Game</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
