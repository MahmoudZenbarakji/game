import React, { useState } from 'react';
import './ChessBoard.css';

const ChessBoard = () => {
  const [queens, setQueens] = useState([]);

  const isSafe = (row, col) => {
    for (let [r, c] of queens) {
      if (r === row || c === col || Math.abs(r - row) === Math.abs(c - col)) {
        return false; 
      }
    }
    return true;
  };

  const handleClick = (row, col) => {
    if (queens.some(([r, c]) => r === row && c === col)) {
      setQueens(queens.filter(([r, c]) => !(r === row && c === col)));
      return;
    }

    if (isSafe(row, col)) {
      if (queens.length < 8) {
        setQueens([...queens, [row, col]]);
      } else {
        alert('You already placed 8 queens!');
      }
    } else {
      alert('❌ Invalid move! This square is attacked by another queen.');
    }
  };

  const isWin = queens.length === 8;

  const resetBoard = () => {
    setQueens([]);
  };

  return (
    <div className="game-container">
      {isWin && (
        <h2 className="win-text">🎉 You did it! All 8 queens placed safely!</h2>
      )}

      <div className="board">
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: 8 }).map((_, col) => {
              const hasQueen = queens.some(([r, c]) => r === row && c === col);
              const isBlack = (row + col) % 2 === 1;
              return (
                <div
                  key={col}
                  className={`cell ${isBlack ? 'black' : 'white'} ${
                    hasQueen ? 'has-queen' : ''
                  }`}
                  onClick={() => handleClick(row, col)}
                >
                  {hasQueen && '👑'}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={resetBoard}>🔄 Reset</button>
        <p>Queens placed: {queens.length}/8</p>
      </div>
    </div>
  );
};

export default ChessBoard;
