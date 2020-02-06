import React from "react";
import Cell from "../components/Cell";

const Board = props => {
  // const { width, height, mines } = props;
  const FLAG = "🚩";

  const width = (props.cols * 14) + 1;

  let rowsArr = [];
  let cellClass = '';

    for(let i = 0; i < props.rows; i++) {
      for(let j = 0; j < props.cols; j++) {
        let cellId = i + "_" + j;

        cellClass = props.cells[i][j].isRevealed ? "cell on" : "cell off"

        rowsArr.push(
          <Cell
          cellId={cellId}
          cellClass={cellClass}
          key={cellId}
          row={i}
          col={j}
          clickTest={props.clickTest}
          />
        )
      }
    }

  

  return (
    <div className="game-bg-board" style={{width: width}}>
      {rowsArr}
      <div className="mine-cells">{}</div>
    </div>
  );
};

export default Board;
