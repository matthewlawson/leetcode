import { topKFrequent } from "./topkfrequentelements";

test("example one", () =>{
    expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
})


test("example two", () =>{
    expect(topKFrequent([1], 1)).toEqual([1]);
})
