import React from "react";
import Button from "./Button";

const PlayerButtons = props => {
  const { onPlay, onReset, playing } = props;

  return (
    <div>
      {playing ? (
        <Button text="Reset" onClick={onReset} />
      ) : (
        <Button text="Play" onClick={onPlay} />
      )}
    </div>
  );
};

export default PlayerButtons;
