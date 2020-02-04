import React, { useState, useEffect } from "react";
import Board from "./Board";
import Button from "./Button";

const Game = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [cells, makeCells] = useState(null);
  const [mines, setMines] = useState(5);
  // Keeps track of whether user is playing, could also create game data
  const [playing, isPlaying] = useState(false);

  function createCellData(h, w, m) {
    let cellArray = [];
    for (let i = 0; i < h; i++) {
      cellArray.push([]);
      for (let j = 0; j < w; j++) {
        cellArray[i][j] = {
          x: i,
          y: j,
          isMine: false,
          isFlag: false,
          isRevealed: false,
          isEmpty: false,
          minesTouching: 0
        };
      }
    }
    // something here that sets up mines
    // something here that figures out how many mines each square is touching

    return cellArray;
  }

  return (
    <div className="App">
      {/* When not playing, display Play Button that sets isplaying to true. */}
      {!playing ? (
        <Button text="Play" onClick={() => isPlaying(true)} />
      ) : (
        <Button text="Reset" onClick={() => isPlaying(false)} />
      )}
      {playing && <Board width={width} height={height} mines={mines} />}
    </div>
  );
};

export default Game;
