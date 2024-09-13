import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const TicTacToePage = lazy(() =>
  import("../../pages/TicTacToePage/TicTacToePage")
);
const TetrisPage = lazy(() => import("../../pages/TetrisPage/TetrisPage"));
export default function App() {
  // const location = useLocation();
  // const isTicTacToePage = location.pathname === "/ticTacToe";
  //  className={isTicTacToePage ? "tic-tac-toe-page" : ""}
  return (
    <div>
      <Toaster />
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticTacToe" element={<TicTacToePage />} />
          <Route path="/tetris" element={<TetrisPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
