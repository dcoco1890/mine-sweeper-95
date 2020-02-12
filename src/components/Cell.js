import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  plantFlag,
  clickCell,
  revealBoard,
  removeFlag
} from "../utils/redux/actions";

const FLAG = "🚩";
const BOMB = "💣";

// We need each cell to be able to call a dispatch on click to modify
//  that cell, it needs reveal to show the board when a bomb is clicked
const mapDispatchToProps = dispatch => {
  return {
    click: cellVal => {
      dispatch(clickCell(cellVal));
    },
    reveal: () => {
      dispatch(revealBoard());
    },
    pFlag: cellVal => {
      dispatch(plantFlag(cellVal));
    },
    rFlag: cellVal => {
      dispatch(removeFlag(cellVal));
    }
  };
};

const ConnectedCell = ({
  cellValue,
  cellID,
  click,
  reveal,
  classer,
  pFlag,
  rFlag
}) => {
  const [cellClass, setCellClass] = useState("cell");

  const cellInfo = cellValue;

  const getCellVal = CV => {
    let x;

    if (CV.isFlag) {
      return (x = FLAG);
    }

    if (CV.isMine) {
      reveal();
      return (x = BOMB);
    } else if (CV.isFlag) {
      return (x = FLAG);
    } else if (CV.minesTouching) {
      return (x = cellValue.minesTouching.toString());
    }
  };

  return (
    <div
      onContextMenu={event => {
        event.preventDefault();

        if (!cellInfo.isFlag) {
          pFlag(cellInfo);
          setCellClass("cell");
        } else {
          rFlag(cellInfo);
        }

        console.log(cellInfo);
      }}
      className={classer === "cell" ? cellClass : classer}
      id={cellID}
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
        {(cellInfo.isFlag || cellInfo.isRevealed) && getCellVal(cellInfo)}
      </p>
    </div>
  );
};

const Cell = connect(null, mapDispatchToProps)(ConnectedCell);
export default Cell;
