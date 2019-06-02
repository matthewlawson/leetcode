import permutations, { permuteSecond } from "./permutations";

describe("permutations", () => {
  test("sample input", () => {
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
});
describe("Second implementation", () => {
  test("sample input", () => {
    const input = [1, 2, 3];
    const output = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ];

    expect(permuteSecond(input).sort()).toEqual(output.sort());
  });
});
