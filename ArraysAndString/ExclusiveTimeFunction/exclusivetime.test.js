import { exclusiveTime } from "./exclusivetime";

test.skip("example one", () => {
    expect(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])).toEqual([3, 4]);
})

test("example two", () => {
    expect(exclusiveTime(1, ["0:start:0", "0:start:1", "0:start:2", "0:end:3", "0:end:4", "0:end:5"])).toEqual([6]);
})
