import React from "react";
import Cell from "../components/Cell";

const makeBoard = (h, w) => {
  for (let i = 0; i < h; i++) {
    console.log(i);
    for (let j = 0; j < w++; j++) {
      return <Cell />;
    }
  }
};

const Board = props => {
  const { width, height, mines } = props;
  console.log(width);
  return (
    <div className="game-bg-board">
      <h3 className="text-center">Game Board</h3>
      <div className="mine-cells">{}</div>
    </div>
  );
};

export default Board;
