/**
 * @param {number[]} grid
 * @return {number}
 */
export default function (grid) {
    return findWater(0, grid)
};

function findWater(left, grid) {
    if (left >= grid.length) {
        return 0;
    }
    let pair = [grid[left]];
    let traverse = true;

    let currentPointer = left + 1;
    let underwaterCount = 0;
    //
    let dir = null;
    while (traverse && currentPointer < grid.length) {
        if (grid[currentPointer] < grid[left]) {
            // Gone down.
            dir = 'down';
            currentPointer++;
        }

        if (dir == 'down' && grid[currentPointer] >= grid[left]) {
            traverse = false;
            pair[1] = grid[currentPointer];
        }
        // We want to know if it goers down & then up - not >=
        // if (grid[currentPointer] >= grid[left]) {
        //     // We found reservour
        //     traverse = false;
        //     pair[1] = grid[currentPointer];
        // }
        else {
            // This is underwater
            underwaterCount += grid[currentPointer];
            // Keep looking for a higher ground ...
            currentPointer++;
        }
    }
    if (pair.length == 2) {
        // How many steps * lowest of each barrier - the underwater bricks + The rest of the grid.
        return ((currentPointer - left - 1) * Math.min(pair[0], pair[1]) - underwaterCount) + findWater(currentPointer, grid);
    }
    else {
        return findWater(left + 1, grid);
    }
}
