import addBinary from "./addbinary";

describe("add two binary strings", () => {
  test("Example one", () => {
    let a = "11";
    let b = "1";
    expect(addBinary(a, b)).toBe("100");
  });
});
