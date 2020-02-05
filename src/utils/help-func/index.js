
// This gets two random numbers (x and y coords) to place bombs
const getTwoRandomXandYCoords = (x, y) => {
    // Random number between 0 and the height / width
    x = Math.floor(Math.random() * x);
    y = Math.floor(Math.random() * y);

    return [x, y];
};


export default {
    plantMines: function (h, w, m, cellArray) {
        let minesPlanted = 0;

        while (minesPlanted < m) {
            let [a, b] = getTwoRandomXandYCoords(h, w);

            if (!cellArray[a][b].isMine) {
                cellArray[a][b].isMine = true;
                minesPlanted++;
            }
        }

        return cellArray;
    }
}