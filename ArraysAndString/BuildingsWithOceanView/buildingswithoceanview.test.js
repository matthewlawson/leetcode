import { findBuildings, findBuildings2, findBuildings3 } from "./buildingswithoceanview";

test("example 1", () => {
    const heights = [4, 2, 3, 1]
    const output = [0, 2, 3]

    expect(findBuildings(heights)).toEqual(output);
})


test("example 1", () => {
    const heights = [4, 2, 3, 1]
    const output = [0, 2, 3]

    expect(findBuildings2(heights)).toEqual(output);
})


test("example 1", () => {
    const heights = [4, 2, 3, 1]
    const output = [0, 2, 3]

    expect(findBuildings3(heights)).toEqual(output);
})
