import React, { useState } from "react";
import { connect } from "react-redux";
import { plantFlag, clickCell } from "../utils/redux/actions";

const FLAG = "🚩";
const BOMB = "💣";

const mapDispatchToProps = dispatch => {
  return {
    click: cellVal => {
      console.log(cellVal);
      dispatch(clickCell(cellVal));
    }
  };
};

const ConnectedCell = ({
  cellValue,
  cellClass,
  row,
  col,
  cellId,
  clickTest,
  click
}) => {
  //   const { cellValue, cellClass, row, col, cellId } = props;
  const [cellval, setCellVal] = useState(null);
  //   console.log(cellValue);
  const getCellVal = cellValue => {
    let x = "";
    if (cellValue.isMine) {
      x = BOMB;
    }
    if (cellValue.minesTouching) {
      x = cellValue.minesTouching.toString();
    }
    return x;
  };

  return (
    <div className={cellClass} id={cellId} onClick={() => click(cellValue)}>
      {cellval}
    </div>
  );
};

const Cell = connect(null, mapDispatchToProps)(ConnectedCell);
export default Cell;
