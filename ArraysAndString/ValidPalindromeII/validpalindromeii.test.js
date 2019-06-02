import validPalindrome from "./validpalindromeII";

describe("Valid palrindrome 2", () => {
  describe("valid", () => {
    test("One change", () => {
      expect(validPalindrome("abaa")).toBe(true);
    });

    test("One change", () => {
      expect(validPalindrome("abca")).toBe(true);
    });

    test("valid - no changes.", () => {
      expect(validPalindrome("aaabaaa")).toBe(true);
    });
  });

  describe("invalid", () => {
    expect(validPalindrome("abcda")).toBe(false);
  });
});
