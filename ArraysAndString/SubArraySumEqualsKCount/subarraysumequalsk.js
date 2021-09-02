/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraySum = function (nums, k) {

    // Sum: Count
    // Map<number, number>
    let prefixSumMap = new Map([[0, 1]]);

    let foundCount = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainderRequired = sum - k;

        if (prefixSumMap.has(remainderRequired)) {
            foundCount += prefixSumMap.get(remainderRequired);
        }
        // Increment or set to 1
        const currentCountAtSum = prefixSumMap.get(sum) ? prefixSumMap.get(sum) : 0
        prefixSumMap.set(sum, currentCountAtSum + 1);
    }
    return foundCount
}
