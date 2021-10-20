import {myAtoi} from "./stringtoint";

test("Example one", () => {
    expect(myAtoi("42")).toBe(42);
});

test("Example two", () => {
    expect(myAtoi("   -42")).toBe(-42);
})

test("Example three", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
})

test("Example four", () => {
    expect(myAtoi("words and 987")).toBe(0);
})

test("Example five", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
})
