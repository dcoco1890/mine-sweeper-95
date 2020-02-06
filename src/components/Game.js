import React, { useState, useEffect } from "react";
import Board from "./Board";
import Button from "./Button";
// Help is just a function that gives us the cell data
import Help from "../utils/help-func/index";

const Game = () => {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(25);
  const [mines, setMines] = useState(100);

  // The Array of Cell Data
  const [cells, setCells] = useState(() => {
    const initState = Help.createCellData(rows, cols, mines);
    return initState;
  });
  // Keeps track of whether user is playing
  const [playing, setPlaying] = useState(false);
  //   useEffect(() => console.log(cells)); // This logs cell data to console

  const clickTest = (row, col) => {
    let copy = [...cells];
    if (copy[row][col].isMine) {
      console.log("Game Over");
    }
    copy[row][col].isRevealed = true;
    setCells(copy);
  };

  const resetBoard = () => {
    setCells(Help.createCellData(rows, cols, mines));
  };

  return (
    <div className="App">
      {/* When not playing, display Play Button that sets isplaying to true. */}
      {!playing ? (
        <Button
          text="Play"
          onClick={() => {
            setPlaying(true);
          }}
        />
      ) : (
        <Button
          text="Reset"
          onClick={() => {
            setPlaying(false);
            resetBoard();
          }}
        />
      )}

      {/*When playing is true, display the board with this info*/}
      {/* {playing && <Board width={width} height={height} mines={mines} />} */}
      {playing && (
        <Board cells={cells} rows={rows} cols={cols} clickTest={clickTest} />
      )}
    </div>
  );
};

export default Game;
