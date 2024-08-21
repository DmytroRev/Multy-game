import { useLocation } from "react-router-dom";
import ComputerPlayer from "./ComputerPlayer/ComputerPlayer";
import UserGame from "./UserGame/UserGame";

export default function TicTacToe() {
  const location = useLocation();
  const mode = location.state?.mode;
  return <div>{mode === "computer" ? <ComputerPlayer /> : <UserGame />}</div>;
}
