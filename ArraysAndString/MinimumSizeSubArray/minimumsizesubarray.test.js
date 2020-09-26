import minimumSizeSubArray from "./minimumsizesubarray";

describe("minimumsizesubarray", () => {
    test("Example one", () => {
        const input = [2,3,1,2,4,3];
        const target = 7;
        const output = 2;
        expect(minimumSizeSubArray(target, input)).toBe(output);
    })

    test("Example two", () => {
        const input = [];
        const target = 100;
        const output = 0;
        expect(minimumSizeSubArray(target, input)).toBe(output);
    })

    test("Example Three", () => {
        const input = [1,2,3,4,5]
        const target = 11;
        const output = 3;
        expect(minimumSizeSubArray(target, input)).toBe(output);
    })

    test("Example Four", () => {
        const input = [1,2,3,4,5]
        const target = 15;
        const output = 5;
        expect(minimumSizeSubArray(target, input)).toBe(output);
    })
})
