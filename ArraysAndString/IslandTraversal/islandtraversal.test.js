import islandTraversalBruteForce from "./islandtraversal-brute-force";
import islandTraversalBFS from "./islandtraversal-breadthfirst";

describe("Island traversal traversal ", () => {
  describe("brute force", () => {
    test("supplied example", () => {
      const input = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
      const output = 16;

      expect(islandTraversalBruteForce(input)).toBe(output);
    });

    test("example 2", () => {
      const input = [[1, 0]];
      const output = 4;
      expect(islandTraversalBruteForce(input)).toBe(output);
    });
  });
  describe("Breadth First Search", () => {
    test("supplied example", () => {
      const input = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
      const output = 16;

      expect(islandTraversalBFS(input)).toBe(output);
    });

    test("example 2", () => {
      const input = [[1, 0]];
      const output = 4;
      expect(islandTraversalBFS(input)).toBe(output);
    });
  });
});
