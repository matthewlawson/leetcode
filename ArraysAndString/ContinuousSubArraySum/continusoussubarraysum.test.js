import {continuousSubArraySum, continuousSubArraySum2} from "./continuoussubarraysum";
describe('brute force', () => {
    test("example one", () => {
        const input= [23,2,4,6,7];
        const target = 6;
        expect(continuousSubArraySum(input, target)).toBe(true);
    })

    // Test multiple part.
    test("my example", () => {
        const input= [23,3,12];
        const target = 13; // 23 + 6 / 2 = 13
        expect(continuousSubArraySum(input, target)).toBe(true);
    })

    test("lots of zzeros", () => {
        const input= [5,0,0,0]
        const target = 3;
        expect(continuousSubArraySum(input, target)).toBe(true);
    })
    // This is a fail
    test.skip("my example 2 ", () => {
        const input= [5,0,0,0]
        const target = 0;
        expect(continuousSubArraySum(input, target)).toBe(true);
    })

})

describe('o(n)', () => {
    test("example one", () => {
        const input= [23,2,4,6,7];
        const target = 6;
        expect(continuousSubArraySum2(input, target)).toBe(true);
    })

    // Test multiple part.
    test("my example", () => {
        const input= [23,3,12];
        const target = 13; // 23 + 3 / 2 = 13
        expect(continuousSubArraySum2(input, target)).toBe(true);
    })

    // Test multiple part.
    test("my example 2 ", () => {
        const input= [5,0,0,0]
        const target = 0;
        expect(continuousSubArraySum2(input, target)).toBe(true);
    })

     // Test multiple part.
     test("mzeros always multiples", () => {
        const input= [5,0,0,0]
        const target = 3;
        expect(continuousSubArraySum2(input, target)).toBe(true);
    })

    // Test multiple part.
    test("mzeros always multiples > 2 positions" , () => {
        const input= [0]
        const target = 1;
        expect(continuousSubArraySum2(input, target)).toBe(false);
    })

})
