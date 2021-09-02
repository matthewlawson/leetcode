import {calculate} from "./basiccalculator";

// test("Example 1", () => {
//     expect(calculate("3+2*2")).toBe(7);
// })

// test("Example 2", () => {
//     expect(calculate(" 3/2 ")).toBe(1);
// })

// test("Example 3", () => {
//     expect(calculate(" 3+5 / 2 ")).toBe(5);
// })

// test("Example 4", () => {
//     expect(calculate("2 + 5 / 2 * 2")).toBe(6);
// })

test("Example 4", () => {
    expect(calculate("2 + 50")).toBe(52);
})

test.skip("Example 5", () => {
    expect(calculate("0-1")).toBe(-1);
})
// //
