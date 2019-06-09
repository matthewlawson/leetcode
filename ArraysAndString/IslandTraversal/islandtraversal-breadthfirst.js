/**
 * @param {number[][]} grid
 * @return {number}
 */
const SEEN = "x";
export default function(grid) {
  // Loop all items, if its a 1 call 'howManyEdges'
  /* input = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0]
    ];
    */
  let totalEdges = 0;
  let height = grid.length;
  let width = grid[0].length;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == 1) {
        return dfs(grid, row, col, width, height, totalEdges);
      }
    }
  }
  return totalEdges;
}
function dfs(grid, row, col, width, height, totalEdges) {
  if (
    row < 0 ||
    col < 0 ||
    row > height - 1 ||
    col > width - 1 ||
    grid[row][col] == 0
  ) {
    // console.log("increment");
    totalEdges++;
    return totalEdges;
  }
  if (grid[row][col] == SEEN) {
    return totalEdges;
  }
  grid[row][col] = SEEN;
  // up
  totalEdges = dfs(grid, row - 1, col, width, height, totalEdges);
  // down
  totalEdges = dfs(grid, row + 1, col, width, height, totalEdges);
  // left
  totalEdges = dfs(grid, row, col + 1, width, height, totalEdges);
  // right
  totalEdges = dfs(grid, row, col - 1, width, height, totalEdges);

  return totalEdges;
}
