/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    // STart at bottom left
    // decrement col do diagnoal traverse.
    // Diagonal traverse from start is row + 1, col + 1
    let maxRows = mat[0].length;
    let maxCols = mat.length
    let col = maxCols - 1;
    let row = 0;
    while(col > 0) {

        const sortedRow = getSortedDiagonalValues(mat, col, row)
        mat = replaceMatrixWithSorted(mat, col, row, sortedRow)
        col --;
    }
    while (row < maxRows) {

        const sortedRow = getSortedDiagonalValues(mat, col, row)
        mat = replaceMatrixWithSorted(mat, col, row, sortedRow)
        row ++;

    }

    return mat;
};

function getSortedDiagonalValues(mat, col, row) {
    let seenValues = [];
    let maxRows = mat[0].length;
    let maxCols = mat.length
    while(col < maxCols && row < maxRows) {
        seenValues.push(mat[col][row]);
        row++;
        col++;
    }
    seenValues.sort((a , b) => { return a - b});
    // console.log(seenValues)
    return seenValues
}
function replaceMatrixWithSorted(mat, col, row, sortedValues) {

    let maxRows = mat[0].length;
    let maxCols = mat.length
    let count = 0;
    while(col < maxCols && row < maxRows) {
        mat[col][row] = sortedValues[count];
        row++;
        col++;
        count++;
    }
    return mat;
}
