import React from "react";
import Cell from "../components/Cell";

const Board = props => {
  // const { width, height, mines } = props;
  // destructed props becuz we know the data we're getting
  const { cols, rows, cells } = props;
  const width = props.cols * 34 + 20;
  console.log(width);

  let rowsArr = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let cellId = i + "_" + j;

      rowsArr.push(
        <Cell
          cellId={cellId}
          key={cellId}
          row={i}
          col={j}
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
