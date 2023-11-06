import React from "react";

const GameOver = ({ winner, onClick }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} is the Winner!</p>}
      {!winner && <p>Its a draw!</p>}
      <p>
        <button onClick={onClick}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
