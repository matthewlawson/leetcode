import trapRainwater from "./traprainwaterbruteforce";

describe('Trap Rainwater', () => {
    test("example", () => {
        const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        const output = 6;

        expect(trapRainwater(input)).toBe(output);
    })


    test("submission error", () => {
        const input = [4, 2, 3];
        const output = 1;

        expect(trapRainwater(input)).toBe(output);
    })



    test("n^2 ever decreasing", () => {
        const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const output = 0;

        expect(trapRainwater(input)).toBe(output);
    })
})
