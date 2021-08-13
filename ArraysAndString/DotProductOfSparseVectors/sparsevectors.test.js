import { SparseVector } from "./sparsevectors";

test("exampleOne", () => {
    const nums1 = [1,0,0,2,3];
    const nums2 = [0,3,0,4,0];
    let v1 = new SparseVector(nums1);
    let v2 = new SparseVector(nums2);
    let ans = v1.dotProduct(v2);
    expect(ans).toBe(8);
})
