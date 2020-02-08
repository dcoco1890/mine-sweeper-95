import React, { useState } from "react";
import { connect } from "react-redux";
import { plantFlag, clickCell } from "../utils/redux/actions";

const FLAG = "🚩";
const BOMB = "💣";

const mapDispatchToProps = dispatch => {
  return {
    click: cellVal => {
      dispatch(clickCell(cellVal));
    }
  };
};

const ConnectedCell = ({ cellValue, cellId, click }) => {
  const [cellval, setCellVal] = useState(cellValue);
  const [cellClass, setCellClass] = useState("cell");
 
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
    ><p>
      {cellval.isRevealed && getCellVal(cellval)}
      </p>
    </div>
  );
};

const Cell = connect(null, mapDispatchToProps)(ConnectedCell);
export default Cell;
