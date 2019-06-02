import permutations from "./permutationsII";

describe("permutations", () => {
  test("no duplicates in input", () => {
    const input = [1, 2, 3];
    const output = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];

    expect(permutations(input)).toEqual(output);
  });

  test("duplicates in input", () => {
    const input = [1, 1, 2];
    const output = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];
    expect(permutations(input)).toEqual(output);
  });
});
