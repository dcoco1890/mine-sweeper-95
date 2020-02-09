import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { plantFlag, clickCell, revealBoard } from "../utils/redux/actions";

const FLAG = "🚩";
const BOMB = "💣";

const mapDispatchToProps = dispatch => {
  return {
    click: cellVal => {
      dispatch(clickCell(cellVal));
    }
  };
};

const ConnectedCell = ({ cellValue, cellId, click, classer }) => {
  const [cellClass, setCellClass] = useState("cell");

  const cellInfo = cellValue;

  const getCellVal = CV => {
    let x = "";
    if (CV.isMine) {
      return (x = BOMB);
    }
    if (CV.minesTouching) {
      return (x = cellValue.minesTouching.toString());
    }
  };

  return (
    <div
      className={cellClass}
      id={cellId}
      onClick={() => {
        click(cellValue);
        setCellClass(prev => prev + " on");
      }}
    >
      <p
        className={
          cellInfo.isRevealed ? `val-${getCellVal(cellInfo)}` : undefined
        }
      >
        {cellInfo.isRevealed && getCellVal(cellInfo)}
      </p>
    </div>
  );
};

const Cell = connect(null, mapDispatchToProps)(ConnectedCell);
export default Cell;
