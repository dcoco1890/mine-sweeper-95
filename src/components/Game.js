import React, { useState, useEffect } from "react";
import Board from "./Board";

import PlayerButtons from "./PlayerButtons";
// Help is just a function that gives us the cell data
import Help from "../utils/help-func/index";
import { connect } from "react-redux";
import { setupGame, revealBoard } from "../utils/redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    start: state => dispatch(setupGame(state)),
    reveal: () => {
      dispatch(revealBoard());
    }
  };
};

// Grabbing the initial (or new) state and giving it to the comp
const mapStateToProps = state => {
  const {
    gameData: { rows, cols, mines },
    gameArray
  } = state;
  return { gameArray, rows, cols, mines };
};

const ConnectedGame = ({ start, reveal, gameArray, rows, cols, mines }) => {
  const [theRows, setRows] = useState(rows);
  const [theCols, setCols] = useState(cols);
  const [theMines, setMines] = useState(mines);
  const [playing, setPlaying] = useState(false);

  // The Array of Cell Data

  const [cells, setCells] = useState(gameArray);
  //   const [cells, setCells] = useState(() => {
  //     const initState = Help.createCellData(rows, cols, mines);
  //     return initState;
  //   });

  const resetBoard = () => {
    setCells(Help.createCellData(rows, cols, mines));
  };

  return (
    <div className="App">
      {/* Tried to Clean this up a bit by separating it */}
      <PlayerButtons
        playing={playing}
        onReset={() => {
          setPlaying(false);
          resetBoard();
        }}
        onPlay={() => {
          start(cells);
          setPlaying(true);
        }}
        onReveal={() => {
          reveal();
        }}
      />

      {/*When playing is true, display the board with this info*/}

      {playing && <Board cells={cells} rows={theRows} cols={theCols} />}
    </div>
  );
};

const Game = connect(mapStateToProps, mapDispatchToProps)(ConnectedGame);
export default Game;
