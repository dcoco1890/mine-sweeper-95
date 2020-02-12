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

const mapStateToProps = state => {
  // uncomment this out if you want to see the state change in console
  return { state };
};

const ConnectedGame = props => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [mines, setMines] = useState(20);
  const [playing, setPlaying] = useState(false);

  // The Array of Cell Data
  const [cells, setCells] = useState(() => {
    const initState = Help.createCellData(rows, cols, mines);
    return initState;
  });

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
          props.start(cells);
          setPlaying(true);
        }}
        onReveal={() => {
          props.reveal();
        }}
      />

      {/*When playing is true, display the board with this info*/}

      {playing && <Board cells={props.state} rows={rows} cols={cols} />}
    </div>
  );
};

const Game = connect(mapStateToProps, mapDispatchToProps)(ConnectedGame);
export default Game;
