import {twoSumNSquare, twoSum} from "./twosum";

describe ("n^2 solution", () => {
    test("Example 1", () => {
        expect(twoSumNSquare([2,7,11,15], 9)).toEqual([0, 1]);
    })

    test("Example 2", () => {
        expect(twoSumNSquare([3,2,4], 6)).toEqual([1, 2]);
    })

    test("Example 3", () => {
        expect(twoSumNSquare([3,3], 6)).toEqual([0, 1]);
    })

    test("Example 4", () => {

        expect(twoSumNSquare([2,5,5,11], 10)).toEqual([1, 2]);
    })
})

describe("o(n) solution", () => {
    test("Example 1", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
    })

    test("Example 2", () => {
        expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
    })

    test("Example 3", () => {
        expect(twoSum([3,3], 6)).toEqual([0, 1]);
    })
})
