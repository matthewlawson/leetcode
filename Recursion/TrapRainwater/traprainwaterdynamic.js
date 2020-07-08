/**
 * @param {number[]} grid
 * @return {number}
 */
export default function (grid) {

    let ans = 0;
    let leftMap = []
    let rightMap = [];

    let leftMax = grid[0];
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] > leftMax) {
            leftMax = grid[i];
        }
        leftMap[i] = leftMax
    }


    let rightMax = grid[grid.length - 1];
    for (let i = grid.length - 1; i >= 0; i--) {
        if (grid[i] > rightMax) {
            rightMax = grid[i];
        }
        rightMap[i] = rightMax
    }

    for (let i = 0; i < grid.length; i++) {

        ans += Math.min(leftMap[i], rightMap[i]) - grid[i];
    }

    return ans;
}
