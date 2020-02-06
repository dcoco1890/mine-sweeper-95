// This gets two random numbers (x and y coords) to place bombs
const getTwoRandomXandYCoords = (x, y) => {
  // Random number between 0 and the height / width
  x = Math.floor(Math.random() * x);
  y = Math.floor(Math.random() * y);
  return [x, y];
};
// takes in amount of rows, cols, mines, and the cell data to modify the mines
const plantMines = (r, c, m, arr) => {
  let minesPlanted = 0;
  while (minesPlanted < m) {
    let [a, b] = getTwoRandomXandYCoords(r, c);
    if (!arr[a][b].isMine) {
      arr[a][b].isMine = true;
      minesPlanted++;
    }
  }
  return arr;
};

/*******Helper function that returns the array of cells with mines planted ********/
export default {
  createCellData: function(r, c, m) {
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
    cellArray = plantMines(r, c, m, cellArray);
    // something here that figures out how many mines each square is touching
    return cellArray;
  }
};
