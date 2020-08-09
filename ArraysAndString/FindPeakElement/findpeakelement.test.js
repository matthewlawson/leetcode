import findPeakElement from "./findpeakelement";

describe("FindPeakElement", () => {
    test("Example One", () => {
        const input = [1,2,3,1];
        const output = 2;
        expect(findPeakElement(input)).toBe(output)
    });

    test("Example Two", () => {
        const input = [1,2,1,3,5,6,4]
        const output= [1,5];
        expect(output).toContain(findPeakElement(input))
    })

    test("Example Three", () => {
        const input = [1,2,2,3,2];
        const output= [3];
        expect(output).toContain(findPeakElement(input))
    })
})
