
import lengthOfLongestSubstringTwoDistinct from "./longesttwodistinct"
describe("longesttwodistinct substring", () => {
    test('example one', () => {
        const input = "eceba"
        const output = 3
        expect(lengthOfLongestSubstringTwoDistinct(input)).toBe(output)
    })

    test('example two', () => {
        const input = "ccaabbb"
        const output= 5
        expect(lengthOfLongestSubstringTwoDistinct(input)).toBe(output)
    })

    test.skip('example two', () => {
        const input = "abaccc"
        const output= 4
        expect(lengthOfLongestSubstringTwoDistinct(input)).toBe(output)
    })
})
