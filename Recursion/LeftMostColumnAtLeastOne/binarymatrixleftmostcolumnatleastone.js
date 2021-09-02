/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
 export const leftMostColumnWithOne = function(matrix) {
    // binary search to split grid and look left if we find a 1?
    const dimensions = matrix.dimensions();
    // console.log(dimensions);
    let leftMost = Number.MAX_VALUE;
    for(let i = 0; i < dimensions.length; i++) {
        // for each row do a inary search
        const colLeftMost = searchForOne(matrix, 0, dimensions[0] - 1, i, null)
        leftMost = Math.min(colLeftMost, leftMost)
    }
    return leftMost;

};
/**
 *
 * @param {BinaryMatrix} matrix
 * @param {number} start
 * @param {number} end
 * @param {boolean} found
 */
function searchForOne(matrix, start, end, row, foundIndex) {
    // console.log(start, end);
    // return 1;
    const rangeToSearch = end - start;
    if(end <= start) {
        const inEndPos = matrix.get(row, end) == 1;
        if(inEndPos && end < foundIndex) {
            return end;
        }
        return foundIndex;
    }
    const mid = Math.floor(start = (start - end) / 2);

    const foundOne = matrix.get(row, mid) == 1;

    if(foundOne) {
        // is there  a 1 even more left?
        return searchForOne(matrix, start, mid - 1, row, mid)
    }
    else {
        // go right - or stop.
        return searchForOne(matrix, mid + 1, end, row, foundIndex);
    }
 }
