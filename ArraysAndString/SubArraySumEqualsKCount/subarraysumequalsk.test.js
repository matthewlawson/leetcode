import { subarraySum } from "./subarraysumequalsk";
import { subarraySum as subarraySumii } from "./subarraysumequalskii";

describe("version one", () => {

    test("Example one", () => {
        expect(subarraySum([1, 1, 1], 2)).toBe(2);
    })


    test("Example two", () => {
        expect(subarraySum([1, 2, 3], 3)).toBe(2);
    })


    test("Example three", () => {
        expect(subarraySum([1], 0)).toBe(0);
    })


    test("Example four", () => {
        expect(subarraySum([1, -1, 0], 0)).toBe(3);
    })
})


describe("version two", () => {

    test("Example one", () => {
        expect(subarraySumii([1, 1, 1], 2)).toBe(2);
    })


    test("Example two", () => {
        expect(subarraySumii([1, 2, 3], 3)).toBe(2);
    })


    test("Example three", () => {
        expect(subarraySumii([1], 0)).toBe(0);
    })


    test("Example four", () => {
        expect(subarraySumii([1, -1, 0], 0)).toBe(3);
    })
})
