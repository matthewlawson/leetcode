import {angleClock} from "./anglebetweenhandsofclock";

test("example 1", () => {
    expect(angleClock(12, 30)).toBe(165)
})

test("example 2", () => {
    expect(angleClock(3, 30)).toBe(75)
})

test("example 3", () => {
    expect(angleClock(3, 15)).toBe(7.5)
})

test("example 4", () => {
    expect(angleClock(4, 50)).toBe(155)
})

test("example 5", () => {
    expect(angleClock(1, 57)).toBe(76.5)
})
