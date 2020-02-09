import React from "react";
import Button from "./Button";

const PlayerButtons = props => {
  const { onPlay, onReset, playing, onReveal } = props;

  return (
    <div>
      {playing ? (
        <>
          <Button text="Reset" onClick={onReset} />
          {""}
          <Button text="Reveal" onClick={onReveal} />
        </>
      ) : (
        <Button text="Play" onClick={onPlay} />
      )}
    </div>
  );
};

export default PlayerButtons;
