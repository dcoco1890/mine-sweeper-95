import React, { useState } from "react";

const FLAG = "🚩";
const BOMB = "💣";


const Cell = props => {
const { cellValue } = props;

const [cellval, setCellVal] = useState(null);


const getCellVal = (cellValue) => {
  let x = '';
  if(cellValue.isMine) {
    x = BOMB;
  }

  if(cellValue.isFlag) {
   x = FLAG;
  }
  return x
}
  return (
    <div
      className={props.cellClass}
      id={props.cellId}
      onClick={() => {
        props.clickTest(props.row, props.col);
        const CV = getCellVal(cellValue);
        if(CV){
          setCellVal(CV)
        }
      }}
    >
     {cellval}
    </div>
  );
};

export default Cell;
