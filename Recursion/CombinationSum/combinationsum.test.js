import {combinationSum} from "./combinationsum";

test("Example one", () => {
    const input = [2,3,6,7];
    const target = 7;
    expect(combinationSum(input, target)).toEqual([
        [2,2,3],[7]
    ])
})

test("example two", () => {
    const input = [2,3,5];
    const target = 8;
    const output = [[2,2,2,2],[2,3,3],[3,5]];

    expect(combinationSum(input, target)).toEqual(
        output
    )
})
