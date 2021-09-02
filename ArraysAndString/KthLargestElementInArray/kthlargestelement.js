/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function kthLargestElement(nums, k) {
    nums.sort(); // n log n

    let position = 1;
    let prev;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(position == k) {
            return nums[i];
        }
        // if(prev == nums[i]) {
        //     continue;
        // }
        position++;
        // prev = nums[i];
    }
}

2/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function kthLargestElement2(nums, k) {
    nums.sort((a, b) => {
        return b - a
    })
    const index = k - 1
    return nums[k - 1];
}
