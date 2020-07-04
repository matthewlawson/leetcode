import removeInvalidParenthesis from "./removeinvalidparenthesis";

describe("Remove the minimum amount of invalid parenthesis", () => {
  test.skip("example 1", () => {
    const input = "()())()";
    const output = ["()()()", "(())()"];

    expect(removeInvalidParenthesis(input)).toEqual(output);
  });

  test.skip("example 2", () => {
    const input = "(a)())()";
    const output = ["(a)()()", "(a())()"];

    expect(removeInvalidParenthesis(input)).toEqual(output);
  });

  test.skip("example 3", () => {
    const input = ")(";
    const output = [""];
    expect(removeInvalidParenthesis(input)).toEqual(output);
  });
});
