import { buddyStrings } from "./buddystring";

test("example one", () => {
    const s = "ab", goal = "ba";
    expect(buddyStrings(s, goal)).toBe(true)
})

test("example two", () => {
    const s = "ab", goal = "ab"
    expect(buddyStrings(s, goal)).toBe(false)
})

test("example three", () => {
    const s = "aa", goal = "aa"
    expect(buddyStrings(s, goal)).toBe(true)
})

test("example four", () => {
    const s = "aaaaaaabc", goal = "aaaaaaacb"
    expect(buddyStrings(s, goal)).toBe(true)
})

test("example five", () => {
    const s = "xyz", goal = "pot"
    expect(buddyStrings(s, goal)).toBe(false)
})
