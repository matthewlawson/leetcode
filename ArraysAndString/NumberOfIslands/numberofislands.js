export default function getNumberOfIslands(binaryMatrix) {
    // Breadth FirstSearch
    let nearByQueue = [];
    let islandCount = 0;
    let rowCount = binaryMatrix.length;
    let columnCount = binaryMatrix[0] ? binaryMatrix[0].length : 0;;
    for (let row = 0; row < rowCount; row++) {
        // Each row
        for (let col = 0; col < columnCount; col++) {

            // Do a breadth first search around this item. && skip if already part of island map...
            if (binaryMatrix[row][col] == "1") {
                // console.log(binaryMatrix[row][col]);
                islandCount++;
                nearByQueue.push({ row, col });
                while (nearByQueue.length > 0) {
                    let position = nearByQueue.shift();
                    let cell = binaryMatrix[position.row][position.col];
                    // console.log("Q", nearByQueue, cell);
                    if (cell === "1") {
                        binaryMatrix[position.row][position.col] = -1
                        //islandCells[position.row][position.col] = true;
                        //Start of an island check its neighbours
                        // Look up
                        if (position.row > 0) {
                            let pos = { row: position.row - 1, col: position.col };
                            nearByQueue.push(pos);
                        }
                        // Look down
                        if (position.row < rowCount - 1) {
                            nearByQueue.push({ row: position.row + 1, col: position.col });
                        }
                        // look left
                        if (position.col > 0) {
                            nearByQueue.push({ row: position.row, col: position.col - 1 });
                        }
                        // look right
                        if (position.col < columnCount - 1) {
                            nearByQueue.push({ row: position.row, col: position.col + 1 });
                        }
                    }
                }
            }

        }
    }
    return islandCount;
}
