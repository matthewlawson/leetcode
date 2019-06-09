import closestPointsToOrigin from "./closestpointstoorigin";

describe("Closest Points to origin", () => {
  describe("brute force", () => {
    test("supplied example", () => {
      const input = [[-2, 2], [1, 3]];
      const K = 1;
      const output = [[-2, 2]];

      expect(closestPointsToOrigin(input, K)).toEqual(output);
    });

    test("second example", () => {
      const input = [[3, 3], [5, -1], [-2, 4]];
      const K = 2;
      const output = [[3, 3], [-2, 4]];

      expect(closestPointsToOrigin(input, K)).toEqual(output);
    });
  });
});
