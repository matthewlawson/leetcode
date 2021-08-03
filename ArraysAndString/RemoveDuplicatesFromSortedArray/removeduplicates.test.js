import {removeDuplicates} from "./removeduplicates";

test("Example 1", () => {
    customJudge([1,1,2], [1,2]);
})

test("Example 2", () => {
    customJudge([1,1,2,2,3], [1,2,3]);
})


function customJudge(nums, expectedNums) {
    //     int[] nums = [...]; // Input array
    // int[] expectedNums = [...]; // The expected answer with correct length

    const k = removeDuplicates(nums); // Calls your implementation

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i]);
    }
}
