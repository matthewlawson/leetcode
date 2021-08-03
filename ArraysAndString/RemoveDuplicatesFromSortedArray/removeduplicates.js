/**
 * @param {number[]} nums
 * @return {number}
 */
export function removeDuplicates (nums) {
    // Modify nums in place, return length
    let slow = 0;
    let fast = 1;
    while(fast < nums.length) {
        if(nums[slow] == nums[fast]) {
            fast ++;
            continue;
        }
        slow++
        nums[slow] = nums[fast];
    }

    return slow + 1;

}
