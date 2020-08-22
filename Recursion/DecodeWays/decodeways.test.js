import decodeways from "./decodeways";

describe("DecodeWays", () => {
    test("Example One", () => {
        const input= "12";
        const output = 2;
        expect(decodeways(input)).toBe(output);
    })
    test("Example Two", () => {
        const input= "2326";
        const output = 4;
        expect(decodeways(input)).toBe(output);
    })

    test("Example Three", () => {
        const input= "10";
        const output = 1;
        expect(decodeways(input)).toBe(output);
    })
})
