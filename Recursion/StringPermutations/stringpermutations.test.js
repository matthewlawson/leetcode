import stringpermutations from "./stringpermutations";

describe('Permutations', () => {
    test("Example One", () => {
        const output = ["abc", "acb", "bac", "bca", "cba", "cab"];
        expect(stringpermutations("abc")).toEqual(output);
    })

})
