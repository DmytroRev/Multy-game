import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AiOrUser from "../../pages/AiOrUser/AiOrUser";
import TicTacToePage from "../../pages/TicTacToe/TicTacToePage";
export default function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticTacToe/select" element={<AiOrUser />} />
          <Route path="/ticTacToe" element={<TicTacToePage />} />
        </Routes>
      </Suspense>
      {/* <TicTacToe /> */}
    </div>
  );
}
