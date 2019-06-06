import sortedSquares from "./sortedSquares";

describe("Sorted Squares tests", () => {
  test("supplied example", () => {
    const input = [-7, -3, 2, 3, 11];
    const output = [4, 9, 9, 49, 121];

    expect(sortedSquares(input)).toEqual(output);
  });
});
