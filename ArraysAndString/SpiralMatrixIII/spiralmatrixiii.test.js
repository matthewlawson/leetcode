import spiralMatrix from "./spiralmatrixiii";

describe.only("Matrix III", () => {
    describe("size three", () => {
        const R = 5;
        const C = 6
        const r0 = 1;
        const c0 = 4;
        const expectedOutput = [[1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [1, 3], [0, 3], [0, 4], [0, 5], [3, 5], [3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [0, 2], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]]
        test("isCorrect", () => {
            const spiral = spiralMatrix(R, C, r0, c0);
            expect(spiral).toEqual(expectedOutput);
        });
    });



});
