import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onSave }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  function handleEdit() {
    setIsEditting((oldVal) => !oldVal);

    if (isEditting) {
      onSave(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditting ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditting ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
