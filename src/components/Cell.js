import React, { useState } from "react";

const FLAG = "🚩";
const BOMB = "💣";

const Cell = ({ cellValue, cellClass, row, col, cellId, clickTest }) => {
  //   const { cellValue, cellClass, row, col, cellId } = props;
  const [cellval, setCellVal] = useState(null);

  const getCellVal = cellValue => {
    let x = "";
    if (cellValue.isMine) {
      x = BOMB;
    }
    if (cellValue.minesTouching) {
      x = cellValue.minesTouching.toString();
      console.log(cellValue);
    }
    return x;
  };

  return (
    <div
      className={cellClass}
      id={cellId}
      onClick={() => {
        clickTest(row, col);
        const CV = getCellVal(cellValue);
        if (CV) {
          setCellVal(CV);
        }
      }}
    >
      {cellval}
    </div>
  );
};

export default Cell;
