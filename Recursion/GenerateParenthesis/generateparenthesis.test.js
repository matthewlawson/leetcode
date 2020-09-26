import generateParenthesis from "./generateparenthesis";


describe("GenerateParenthesis", () => {
    test("Example One", () => {
        const input = 3;
        const output = [
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()"
          ]

          expect(generateParenthesis(input)).toEqual(output);
    })
})
