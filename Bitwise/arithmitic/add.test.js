import { add, add2 } from "./add";

describe("addition", () => {


    test("1 + 5", () => {
        expect(add(1, 5)).toBe(6)
    })

    test("100 + 5", () => {
        expect(add(100, 5)).toBe(105)
    })
    test("99999 + 2", () => {
        expect(add(99999, 2)).toBe(100001)
    })
})

describe("addition 2", () => {
    test("1 + 5", () => {
        expect(add2(1, 5)).toBe(6)
    })

    test("100 + 5", () => {
        expect(add2(100, 5)).toBe(105)
    })

    test("99999 + 2", () => {
        expect(add2(99999, 2)).toBe(100001)
    })
})
