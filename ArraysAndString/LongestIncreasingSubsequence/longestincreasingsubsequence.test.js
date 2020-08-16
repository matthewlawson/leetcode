import longestincreasingsubsequence from "./longestincreasingsubsequence";


describe('longest increasing subsequence', () => {
    test('Example one', () => {
        const input =  [1,3,5,4,7]
        const output = 3;
        expect(longestincreasingsubsequence(input)).toBe(output);
    })

    test('Example Two', () => {
        const input = [2,2,2,2,2]
        const output = 1;
        expect(longestincreasingsubsequence(input)).toBe(output);
    })
})
