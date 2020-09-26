import letterCombinations from "./lettercomninationsofnumber";

describe("lettercombinations", () => {
    test('example one', () => {
        const input = "23";
        const output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
        expect(letterCombinations(input)).toEqual(output);
        // expect(combinations).toEql(output);
    });
})
