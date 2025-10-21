import React from "react";
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="App">
      <h1>♛ The 8 Queens Puzzle</h1>
      <p>Try to place 8 queens on the board without attacking each other!</p>
      <ChessBoard />
    </div>
  );
}

export default App;
