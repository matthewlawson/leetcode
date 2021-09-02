import {kthLargestElement, kthLargestElement2} from "./kthlargestelement";

describe('approach 1', () => {
    test("Example 1", () => {
        expect(kthLargestElement([3,2,1,5,6,4], 2)).toBe(5);
    })


    test("Example 2", () => {
        expect(kthLargestElement([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
    })

})

describe('approach 2', () => {
    test("Example 1", () => {
        expect(kthLargestElement2([3,2,1,5,6,4], 2)).toBe(5);
    })


    test("Example 2", () => {
        expect(kthLargestElement2([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
    })

    test("Example 3", () => {

        expect(kthLargestElement2([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 2)).toBe(10)
    })
})
