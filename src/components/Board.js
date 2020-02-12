import React from "react";
import Cell from "../components/Cell";

const Board = props => {
  // const { width, height, mines } = props;
  // destructed props becuz we know the data we're getting
  const { cols, rows, cells } = props;

  // each cell is 35px wide (for now) and I added a 1 px margin to each side,
  const width = props.cols * 34 + 20;

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
          cellValue={cells[i][j]}
          classer={cells[i][j].isRevealed === false ? "cell" : "cell on"}
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

export default Board;
