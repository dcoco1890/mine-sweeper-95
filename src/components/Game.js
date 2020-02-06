import React, { useState, useEffect } from "react";
import Board from "./Board";
import Button from "./Button";
import Helpfuncs from "../utils/help-func/index"

let numRow = 30;
let numCol = 50

// Create cell data, takes in height, width, and num of mines
const createCellData = () => {


  let cellArray = [];
  for (let i = 0; i < numRow; i++) {
    cellArray.push([]);
    for (let j = 0; j < numCol; j++) {
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

  // Works, sets random mines
  // cellArray = Helpfuncs.plantMines(h,w,m,cellArray);
  // something here that figures out how many mines each square is touching

  return cellArray;
};



const Game = () => {
  // height and width
  // const [width, setWidth] = useState(5);
  // const [height, setHeight] = useState(5);

  // The Array of Cell Data
  const [cells, setCells] = useState(() => {
    return createCellData();
  });
  // Keeps track of whether user is playing, could also create game data
  const [playing, setPlaying] = useState(false);

  
  useEffect(() => console.log(cells)); // This logs cell data to console
  const [mines, setMines] = useState(5);


  const clickTest = (row, col) => {
    let copy = [...cells]
    copy[row][col].isRevealed = true;
    setCells(copy)
  }

  const resetBoard = () => {
    setCells(createCellData())
  }

  return (
    <div className="App">
      {/* When not playing, display Play Button that sets isplaying to true. */}
      {!playing ? (
        <Button
          text="Play"
          onClick={() => {
            setPlaying(true);
            // create var to hold cell data, then set it in state with set cells
            // let dataArr = createCellData(height, width, mines);
            // setCells(dataArr);
          }}
        />
      ) : (
          <Button
            text="Reset"
            onClick={() => {
              setPlaying(false);
              resetBoard()
            }}
          />
        )}

      {/*When playing is true, display the board with this info*/}
      {/* {playing && <Board width={width} height={height} mines={mines} />} */}
      {playing &&
        <Board
          cells={cells}
          rows={numRow}
          cols={numCol}
          clickTest={clickTest}
        />}
    </div>
  );
};

export default Game;
