import { findNumberOfProvinces } from "./numberofprovinces";

test("Example 1", () => {
    const input = [[1,1,0],[1,1,0],[0,0,1]];
    const output = 2;
    expect(findNumberOfProvinces(input)).toBe(output);
})

test("Example 2", () => {
    const input = [[1,0,0],[0,1,0],[0,0,1]];
    const output = 3;
    expect(findNumberOfProvinces(input)).toBe(output);
})

test("example 3", () => {
    const input = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]];
    const output = 1;
    expect(findNumberOfProvinces(input)).toBe(output);
})
