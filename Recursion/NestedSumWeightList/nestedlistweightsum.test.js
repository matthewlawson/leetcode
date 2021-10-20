import { depthSum } from "./nestedlistweightsum";

test("example one", () => {
    expect(depthSum([[1, 1], 2, [1, 1]])).toBe(10);
})

test("example two", () => {
    expect(depthSum([1,[4,[6]]])).toBe(27);
})
