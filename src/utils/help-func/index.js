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

// get surrounding clockwise from left (top left, center top, top right, right, etc.)
const getSurroundingCells = (x, y, r, c, arr) => {
  let surroundingCells = [];
  let rowBounds = r - 1;
  let colBounds = c - 1;
  // Left
  if (y > 0) {
    surroundingCells.push(arr[x][y - 1]);
  }
  // Top Left
  if (y > 0 && x > 0) {
    surroundingCells.push(arr[x - 1][y - 1]);
  }
  // Center Top
  if (x > 0) {
    surroundingCells.push(arr[x - 1][y]);
  }
  // Top Right
  if (x > 0 && y < colBounds) {
    surroundingCells.push(arr[x - 1][y + 1]);
  }
  // Right
  if (y < colBounds) {
    surroundingCells.push(arr[x][y + 1]);
  }
  // Bottom Right
  if (x < rowBounds && y < colBounds) {
    surroundingCells.push(arr[x + 1][y + 1]);
  }
  // Fat Bottom Girls
  if (x < rowBounds) {
    surroundingCells.push(arr[x + 1][y]);
  }
  // Bottom Left
  if (x < rowBounds && y > 0) {
    surroundingCells.push(arr[x + 1][y - 1]);
  }

  return surroundingCells;
};

const getMineNeighbors = (r, c, m, arr) => {
  let newArr = arr;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (newArr[i][j].isMine !== true) {
        let x = newArr[i][j].x;
        let y = newArr[i][j].y;

        const cellsNextToMineCell = getSurroundingCells(x, y, r, c, newArr);
        const mines = cellsNextToMineCell.filter(item => item.isMine);

        if (mines.length) {
          newArr[i][j].minesTouching = mines.length;
        } else {
          newArr[i][j].isEmpty = true;
        }
      }
    }
  }

  return newArr;
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
    cellArray = getMineNeighbors(r, c, m, cellArray);
    return cellArray;
  }
};
