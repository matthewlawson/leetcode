/**
 *
 * @param {Array<number>} nums
 * @param {number} target
 * @return {Array<number>}
 */
export function twoSumNSquare(nums, target) {
    // n^2.

    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j< nums.length; j++) {
            if(i == j ) {
                continue;
            }
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return;
}

/**
 *
 * @param {Array<number>} nums
 * @param {number} target
 * @return {Array<number>}
 */
export function twoSum(nums, target) {
    // Make a map of value => [index]
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if(map.has(remaining) && map.get(remaining) != i) {
            return [i, map.get(remaining)];
        }
    }

}
