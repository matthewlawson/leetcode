import customSortString from "./customsortstring";

describe("Custom Sorting", () => {
  describe("valid", () => {
    test("One change", () => {
      const S = "cba";
      const T = "abcd";
      const output = "cbad";
      expect(customSortString(S, T)).toBe(output);
    });
  });
});
