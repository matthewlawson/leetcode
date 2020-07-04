export default function spiralMatrix(grid) {
    if (grid.length == 0) {
        return [];
    }
    const output = [];
    let width = grid[0].length;
    let height = grid.length;
    // Do boundary checks
    let startRow = 0;
    let startCol = 0;
    let endRow = height - 1;
    let endCol = width - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Right
        for (let col = startCol; col <= endCol; col++) { // xEnd = 2
            output.push(grid[startRow][col]); //1,2,3
        } // x = 2, y = 0
        console.log(output);
        // Down
        for (let row = startRow + 1; row <= endRow; row++) { // yEnd = 2
            output.push(grid[row][endCol]); // 6, 9
        }// x = 2, y = 2
        // left
        for (let col = endCol - 1; col >= startCol; col--) { // xStart = 0
            if (startRow == endRow) break;
            output.push(grid[endRow][col])
        } // x = 0, y = 2
        // Up
        for (let row = endRow - 1; row >= startRow + 1; row--) { // yStart = 0
            // console.log(y, col);
            if (startCol === endCol) break;
            output.push(grid[row][startCol]);
        }

        startCol++; // 1
        startRow++; // 1
        endCol--; //1
        endRow--; // 1


    }

    return output;

}
