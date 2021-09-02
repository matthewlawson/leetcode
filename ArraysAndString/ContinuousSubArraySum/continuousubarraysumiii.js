
// const input= [23,3,12];
// const target = 13; // 23 + 6 / 2 = 13
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export function continuousSubArraySum(nums, k) {

    // Keep a map of a continous sum % k to the index.
    // map[sum(nums[i:i]) % k] => i
    /*
    // [23, 3, 12]
    m = {5: 0, 2: 1, 2: 0}
    */
   // Keep total
    // Check that the
    // Why is it true that our total % k, if previously seen then we have a match?
    let remainder = 0;
    let map = new Map();
    map.set(0, -1);
    for(let i = 0; i < nums.length ;i++) {
        remainder += nums[i];
        if(k > 0) {
            remainder = remainder % k
        }
        if(map.has(remainder)) {
            if(i - map.get(remainder) > 1) {
                return true;
            }
        }
        else {
            map.set(remainder, i);
        }
    }

    return false;
}
