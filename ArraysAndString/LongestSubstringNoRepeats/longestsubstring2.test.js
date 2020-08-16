import longestSubstring from "./longestsubstring2";

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

    test("Example 4", () => {
        const input = "c";
        const output = 1;
        expect(longestSubstring(input)).toBe(output);
    });

    test("Example 5", () => {
        const input = "ac";
        const output = 2;
        expect(longestSubstring(input)).toBe(output);
    });

    test("Example 6", () => {
        const input = "dvdf";
        const output = 3;
        expect(longestSubstring(input)).toBe(output);
    });
});
