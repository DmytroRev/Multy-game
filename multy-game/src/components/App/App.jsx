import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import TicTacToePage from "../../pages/TicTacToe/TicTacToePage";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div>
      <Toaster />
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticTacToe" element={<TicTacToePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
