/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let slow = 0;
    let fast = 0;

    let sum = 0;
    let minimumSize = Number.MAX_VALUE;
    let foundValue= false;
    while (slow <= nums.length && fast <= nums.length) {
        if(sum >= s) {
            foundValue = true;
            minimumSize = Math.min(minimumSize, fast - slow);
            sum -= nums[slow];
            slow ++
        }
        else {
            sum += nums[fast];
            fast++;
        }
    }
    if(!foundValue) {
        return 0;
    }
    return minimumSize;
};

export default  minSubArrayLen;
