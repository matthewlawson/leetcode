import { merge } from "./mergeintervals";

describe("merge", () => {
    test('example one', () => {
        const input = [[1, 3], [2, 6], [8, 10], [15, 18]]
        const output = [[1, 6], [8, 10], [15, 18]];
        expect(merge(input)).toEqual(output);
    })

    test('example two', () => {
        const input = [[1,4],[4,5]]
        const output = [[1, 5]];
        expect(merge(input)).toEqual(output);
    });

    test("Example three", () => {
        const input = [[1, 3],  [8, 10], [15, 18], [2, 6]]
        const output = [[1, 6], [8, 10], [15, 18]];
        expect(merge(input)).toEqual(output);
    })
})
