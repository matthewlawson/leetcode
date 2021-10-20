import { numberOfWays } from "./pairsums";

test("Example one", () => {
    expect(numberOfWays([1, 2, 3, 4, 3], 6)).toBe(2);
})

test("Example two", () => {
    expect(numberOfWays([1, 5, 3, 3, 3], 6)).toBe(4);
})
