/**
 * @param {number[]} grid
 * @return {number}
 */
export default function (grid) {

    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        let rightMax = 0
        let leftMax = 0
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, grid[j]);
            // console.log(leftMax);
        }
        // Look right
        for (let j = i; j < grid.length; j++) {
            rightMax = Math.max(rightMax, grid[j]);
            // console.log(rightMax);
        }
        ans += Math.min(leftMax, rightMax) - grid[i];
    }

    return ans;
}
