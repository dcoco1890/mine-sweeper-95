import React, { useState } from "react";

const Cell = props => {


  return <div className={props.cellClass}
  id={props.cellId}
  onClick={() => props.clickTest(props.row, props.col)}></div>;
};

export default Cell;
