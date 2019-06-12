import maxSizeSubarray from "./maxsizesubarray";

describe("Longest Substring", () => {
  test.skip("Example 1", () => {
    const input = [1, -1, 5, -2, 3];
    const k = 3;
    const output = 4;
    expect(maxSizeSubarray(input, k)).toBe(output);
  });

  test.skip("Example 2", () => {
    const input = [-2, -1, 2, 1];
    const k = 1;
    const output = 2;
    expect(maxSizeSubarray(input, k)).toBe(output);
  });

  test.skip("Example 3", () => {
    const input = [1, 0, -1];
    const k = -1;
    const output = 2;
    expect(maxSizeSubarray(input, k)).toBe(output);
  });

  test("Example 3", () => {
    const input = [1, 1, 0];
    const k = 1;
    const output = 2;
    expect(maxSizeSubarray(input, k)).toBe(output);
  });
});
