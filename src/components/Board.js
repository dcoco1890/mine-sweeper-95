import React from "react";
import { connect } from "react-redux";
import Cell from "../components/Cell";

const mapStateToProps = state => {
  const {
    gameData: { rows, cols, mines },
    gameArray
  } = state;

  return { gameArray, rows, cols, mines };
};

const ConnectedBoard = ({ gameArray, rows, cols, mines }) => {
  // const { width, height, mines } = props;
  // destructed props becuz we know the data we're getting

  // each cell is 35px wide (for now) and I added a 1 px margin to each side,
  const width = cols * 34 + 20;

  let rowsArr = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cellID = i + "_" + j;

      rowsArr.push(
        <Cell
          cellID={cellID}
          key={cellID}
          row={i}
          col={j}
          cellValue={gameArray[i][j]}
          classer={gameArray[i][j].isRevealed === false ? "cell" : "cell on"}
        />
      );
    }
  }

  return (
    <div className="game-bg-board" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};

const Board = connect(mapStateToProps)(ConnectedBoard);

export default Board;
