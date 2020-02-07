import React from "react";
import Cell from "../components/Cell";

const Board = props => {
  // const { width, height, mines } = props;
 
  // destructed props becuz we know the data we're getting
  const { cols, rows, cells, clickTest } = props;
  const width = props.cols * 14 + 1;

  let rowsArr = [];
  let cellClass = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cellId = i + "_" + j;

      cellClass = cells[i][j].isRevealed ? "cell on" : "cell off";

      rowsArr.push(
        <Cell
          cellId={cellId}
          cellClass={cellClass}
          key={cellId}
          row={i}
          col={j}
          clickTest={clickTest}
          //Pass the attributes of current cell to that cell
          cellValue={cells[i][j]}
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
