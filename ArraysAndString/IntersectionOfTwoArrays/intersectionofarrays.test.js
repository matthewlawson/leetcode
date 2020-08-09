import { bruteForce, optimisedOne } from "./intersectionofarrays";

describe('bruteforce', () => {
    test('example one', () => {
        const nums1 = [1,2,2,1] ;
        const nums2 = [2,2];
        const output = [2,2];

        expect(bruteForce(nums1, nums2)).toEqual(output);

    });

    test('example two', () => {
        const nums1 = [4,9,5] ;
        const nums2 = [9,4,9,8,4]
        const output = [4,9]

        expect(bruteForce(nums1, nums2)).toEqual(output);
    })
})


describe('optimisedOne', () => {
    test('example one', () => {
        const nums1 = [1,2,2,1] ;
        const nums2 = [2,2];
        const output = [2,2];

        expect(optimisedOne(nums1, nums2)).toEqual(output);

    });

    test('example two', () => {
        const nums1 = [4,9,5] ;
        const nums2 = [9,4,9,8,4]
        const output = [4,9]

        expect(optimisedOne(nums1, nums2)).toEqual(output);
    })
})


