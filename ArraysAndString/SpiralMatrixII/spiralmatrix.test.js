import spiralMatrix from "./spiralmatrix";

describe("Matrix II", () => {
    describe("size three", () => {
        const expectedOutput = [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ];
        test("isCorrect", () => {
            const spiral = spiralMatrix(3);
            expect(spiral).toEqual(expectedOutput);
        });
    });

    describe("size one", () => {
        const expectedOutput = [
            [1]
        ];
        test("isCorrect", () => {
            const spiral = spiralMatrix(1);
            expect(spiral).toEqual(expectedOutput);
        });
    });

    describe("size zero", () => {
        const expectedOutput = [
        ];
        test("isCorrect", () => {
            const spiral = spiralMatrix(0);
            expect(spiral).toEqual(expectedOutput);
        });
    });

    describe("size four", () => {
        const expectedOutput = [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ];
        test("isCorrect", () => {
            const spiral = spiralMatrix(4);
            expect(spiral).toEqual(expectedOutput);
        });
    });

});
