import longestSubstring from "./longestsubstring";

describe("Longest Substring", () => {
  test("Example 1", () => {
    const input = "abcabcbb";
    const output = 3;
    expect(longestSubstring(input)).toBe(output);
  });

  test("Example 2", () => {
    const input = "bbbbbb";
    const output = 1;
    expect(longestSubstring(input)).toBe(output);
  });

  test("Example 3", () => {
    const input = "pwwkew";
    const output = 3;
    expect(longestSubstring(input)).toBe(output);
  });
});
