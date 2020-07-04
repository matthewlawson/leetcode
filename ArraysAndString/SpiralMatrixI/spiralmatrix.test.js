import spiralMatrix from "./spiralmatrix";

describe("Matrix I", () => {
    describe("size three", () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const output = [1, 2, 3, 6, 9, 8, 7, 4, 5];
        test("isCorrect", () => {
            const spiral = spiralMatrix(input);
            expect(spiral).toEqual(output);
        });
    });

    describe('non square', () => {
        const input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]]

        const output = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

        test("isCorrect", () => {
            const spiral = spiralMatrix(input);
            expect(spiral).toEqual(output);
        });
    })

    describe('empty grid', () => {
        const input = [];

        const output = [];

        test("isCorrect", () => {
            const spiral = spiralMatrix(input);
            expect(spiral).toEqual(output);
        });
    })



});
