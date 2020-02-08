import React, { useState, useEffect } from "react";
import Board from "./Board";

import PlayerButtons from "./PlayerButtons";
// Help is just a function that gives us the cell data
import Help from "../utils/help-func/index";
import { connect } from "react-redux";
import { setupGame } from "../utils/redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    start: state => dispatch(setupGame(state))
  };
};

const mapStateToProps = state => {
  // uncomment this out if you want to see the state change in console
  // console.log(state);
  return state;
};

const ConnectedGame = props => {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(25);
  const [mines, setMines] = useState(100);
  // Keeps track of whether user is playing
  const [playing, setPlaying] = useState(false);

  // The Array of Cell Data
  const [cells, setCells] = useState(() => {
    const initState = Help.createCellData(rows, cols, mines);
    return initState;
  });

  useEffect(() => {
    if (playing) {
      setCells(...props.state);
    }
  }, []);

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
      />

      {/*When playing is true, display the board with this info*/}
      {/* {playing && <Board width={width} height={height} mines={mines} />} */}
      {playing && <Board cells={cells} rows={rows} cols={cols} />}
    </div>
  );
};

const Game = connect(mapStateToProps, mapDispatchToProps)(ConnectedGame);
export default Game;
