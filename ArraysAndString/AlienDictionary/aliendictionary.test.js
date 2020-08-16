import { isAlienSorted } from "./aliendictionary";

describe("Alien Dictionay", () => {
    test('Example One', () => {
        const words = ["hello", "leetcode"];
        const order = "hlabcdefgijkmnopqrstuvwxyz"
        const expectedResult = true;
        expect(isAlienSorted(words, order)).toBe(expectedResult);
    })

    test('Example Two', () => {
        const words = ["word", "world", "row"]
        const order = "worldabcefghijkmnpqstuvxyz"
        const expectedResult = false;
        expect(isAlienSorted(words, order)).toBe(expectedResult);
    })

    test('Example Three', () => {
        const words = ["apple", "app"]
        const order = "abcdefghijklmnopqrstuvwxyz"
        const expectedResult = false;
        expect(isAlienSorted(words, order)).toBe(expectedResult);
    })

    test('Example Four', () => {
        const words = ["iekm", "tpnhnbe"]
        const order = "loxbzapnmstkhijfcuqdewyvrg"
        const expectedResult = false;
        expect(isAlienSorted(words, order)).toBe(expectedResult);
    })

})
