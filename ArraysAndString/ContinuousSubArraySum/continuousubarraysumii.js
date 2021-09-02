
// [23,3,12]
// presum= [23, 26, 38] k = 13
export function continuousSubArraySum(nums, k) {
    let total = 0;
    let preSum = [];
    preSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        preSum[i] = nums[i] + preSum[i - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        total += total;
        for (let j = i + 1; j < nums.length; j++) {
            if(k  == 0 && preSum[i] - preSum[j] == 0) {
                return true
            }
            if(preSum[i] % k == 0) {
                return true
            }
            if ((preSum[i] - preSum[j]) % k == 0) {
                return true;
            }
        }
    }

    return false;
}
