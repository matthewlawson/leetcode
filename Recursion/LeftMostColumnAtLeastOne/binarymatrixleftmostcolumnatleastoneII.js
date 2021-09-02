// [0,0],[0,1]
export var leftMostColumnWithOne = function(binaryMatrix) {
    let leftMostOne = -1;
    // binary search to split grid and look left if we find a 1?
    let totalRows = binaryMatrix.dimensions()[0];
    let totalCols = binaryMatrix.dimensions()[1];
    // console.log(totalRows, totalCols)
    for(let i = 0; i < totalRows ; i++) {
        // console.log('row', i)
        // Do a binary search to find the left most one ...
        let left = 0;
        let right = totalCols - 1;
        let pivot;
        while(left <= right) {
            pivot = Math.floor(left + (right - left) / 2);
            // console.log('pivot', i, pivot);
            if(binaryMatrix.get(i, pivot) == 1) {
                // Maybe there is a more left one?
                // console.log('found 1 at;, ',pivot);
                if(leftMostOne == -1) {
                    leftMostOne = pivot;
                }
                else {
                    leftMostOne = Math.min(leftMostOne, pivot);
                }

                // Search left ...
                right = pivot - 1;
            }
            else {
                // otherwise go right.
                // Extra check here if there is already a "more left 1"?
                left = pivot + 1;
                if(leftMostOne !== -1 && leftMostOne < left) {
                    break;
                }
            }
        }
    }

    return leftMostOne;
};
