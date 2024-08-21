import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <p>it`s launch game tools</p>
      </div>
      <ul>
        <li>
          <NavLink to="/ticTacToe/select">Game</NavLink>
        </li>
      </ul>
    </div>
  );
}
