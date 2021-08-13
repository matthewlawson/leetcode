import {addStrings} from "./addstrings";

test("example 1", () => {
    expect(addStrings("11", "123")).toBe("134")
})

test("example 2", () => {
    expect(addStrings("1", "9")).toBe("10")
})

test("example 3", () => {
    expect(addStrings("9", "99")).toBe("108")
})
