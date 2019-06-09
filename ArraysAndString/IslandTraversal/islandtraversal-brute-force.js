/**
 * @param {number[][]} grid
 * @return {number}
 */
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
        totalEdges += howManyEdges(grid, row, col, width, height);
      }
    }
  }
  return totalEdges;
}
// All 1's are connected
// Only one islannd
// Each cell can have maximum of 4 edges touching water
// BFS problem or optimisation?

// Solution 1:
// Iterate on grid
// Find a '1'
// totalEdges = 4, Look at its neighbours, deduct 1 if neighbour is another 1

// Solution 2:
// Iterate on grid
// Find a 1
// If a neighbour is an edge or '0' increment
var howManyEdges = function(grid, row, col, width, height) {
  let totalEdges = 0;
  // Deal with out of bounds
  // Look up
  if (row == 0 || grid[row - 1][col] == 0) {
    totalEdges++;
  }
  // Look down
  if (row == height - 1 || grid[row + 1][col] == 0) {
    totalEdges++;
  }
  // Look left
  if (col == 0 || grid[row][col - 1] == 0) {
    totalEdges++;
  }
  // Look right
  if (col == width - 1 || grid[row][col + 1] == 0) {
    totalEdges++;
  }
  return totalEdges;
};
