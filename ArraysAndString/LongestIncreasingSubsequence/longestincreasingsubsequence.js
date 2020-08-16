/**
 * @param {number[]} nums
 * @return {number}
 */
export default  function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    let left = 0;
    let right = 1;
    let max = 1;
    while(right < nums.length) {
        if(nums[right] > nums[right - 1]) {
            right++;
            max = Math.max(max, right  - left);
        }
        else {
            left = right;
            right++;
        }
    }
    return max;
};
