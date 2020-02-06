import React, { useState, useEffect } from "react";
import Board from "./Board";
import Button from "./Button";
import Helpfuncs from "../utils/help-func/index";

// let numRow = 30;
// let numCol = 50;

// Create cell data, takes in height, width, and num of mines
const createCellData = (r, c, m) => {
    let cellArray = [];
    for (let i = 0; i < r; i++) {
        cellArray.push([]);
        for (let j = 0; j < c; j++) {
            cellArray[i][j] = {
                x: i,
                y: j,
                isMine: false,
                isFlag: false,
                isRevealed: false,
                isEmpty: false,
                minesTouching: 0
            };
        }
    }

    // Works, sets random mines
    cellArray = Helpfuncs.plantMines(r, c, m, cellArray);
    // something here that figures out how many mines each square is touching

    return cellArray;
};

const Game = () => {
    const [rows, setRows] = useState(5);
    const [cols, setCols] = useState(5);
    const [mines, setMines] = useState(2);

    // The Array of Cell Data
    const [cells, setCells] = useState(() => {
        return createCellData(rows, cols, mines);
    });
    // Keeps track of whether user is playing
    const [playing, setPlaying] = useState(false);
    useEffect(() => console.log(cells)); // This logs cell data to console

    const clickTest = (row, col) => {
        let copy = [...cells];
        copy[row][col].isRevealed = true;
        setCells(copy);
    };

    const resetBoard = () => {
        setCells(createCellData(rows, cols, mines));
    };

    return (
        <div className="App">
            {/* When not playing, display Play Button that sets isplaying to true. */}
            {!playing ? (
                <Button
                    text="Play"
                    onClick={() => {
                        setPlaying(true);
                    }}
                />
            ) : (
                    <Button
                        text="Reset"
                        onClick={() => {
                            setPlaying(false);
                            resetBoard();
                        }}
                    />
                )}

            {/*When playing is true, display the board with this info*/}
            {/* {playing && <Board width={width} height={height} mines={mines} />} */}
            {playing && (
                <Board cells={cells} rows={rows} cols={cols} clickTest={clickTest} />
            )}
        </div>
    );
};

export default Game;
