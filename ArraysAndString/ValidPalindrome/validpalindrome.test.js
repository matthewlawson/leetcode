import validPalindrome from "./validpalindrome";


describe("ValidPalindrome", () => {
    test("Example one", () => {
        const input = "A man, a plan, a canal: Panama"
        const output= true
        expect(validPalindrome(input)).toBe(output);
    })
    test("Example two", () => {
        const input = "A man, a plan, a cana: Panama"
        const output = false
        expect(validPalindrome(input)).toBe(output);
    })

    test("Example three", () => {
        const input = "race this"
        const output = false
        expect(validPalindrome(input)).toBe(output);
    })
    test("Example four", () => {
        const input = "0P"
        const output = false
        expect(validPalindrome(input)).toBe(output);
    })
})
