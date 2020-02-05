import React from "react";
import Cell from "../components/Cell";

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
