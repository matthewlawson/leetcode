/**
 * @param {character[][]} board
 * @return {boolean}
 */
export var isValidSudoku = function (board) {
    // Are rows valid?
    for(let row = 0; row < 9; row ++) {
        const validRow = isRowValid(row, board);
        if(!validRow) {
            return false;
        }
    }
    // Are cols valid
    for(let col = 0; col < 9; col ++) {
        const validCol = isColValid(col, board);
        if(!validCol) {
            return false;
        }
    }
    let startCol = 0;
    let endCol = 2;
    let startRow = 0;
    let endRow = 2;
    let squareCount = 0;
    // Row ->
    // Col v
    while(squareCount < 9) {
        // Each square
        // console.log(startRow, endRow, startCol, endCol)
        // How do do the iteration repeat a row
        const validSquare = isSquareValid(startRow, endRow, startCol, endCol, board);
        squareCount++;
        if(!validSquare) {
            return false;
        }
        // This makes it go diagonal ...
        startCol+=3;
        endCol+=3;
        if(endCol > 8) {
            // Move down coumns to next 3x3 at posiion 0.
            startCol = 0;
            endCol = 2;

            startRow+=3;
            endRow+=3;
        }

    }
    return true;
};


function isRowValid(row, board) {
    const seenDigits = new Set();
    for(let col = 0; col < 9; col++) {
        if(isDigit(board[row][col])) {
            // it is a digit...
            // Is it previously seen?
            if(seenDigits.has(board[row][col])) {
                return false;
            }
            seenDigits.add(board[row][col])
        }
    }

    return true;
}

function isSquareValid(startRow, endRow, startCol, endCol, board) {
    const seenDigits = new Set();
    for(let row = startRow; row <= endRow; row++) {
        for(let col = startCol; col <= endCol; col++) {

            if(isDigit(board[row][col])) {

                if(seenDigits.has(board[row][col])) {
                    return false;
                }
                seenDigits.add(board[row][col]);
            }
        }
    }
    return true
}
function isColValid(col, board) {
    const seenDigits = new Set();
    for(let row = 0; row < 9; row++) {
        if(isDigit(board[row][col])) {
            // it is a digit...
            // Is it previously seen?
            if(seenDigits.has(board[row][col])) {
                return false;
            }
            seenDigits.add(board[row][col])
        }
    }

    return true;
}



function isDigit(gridValue) {
    return gridValue != '.'
}
