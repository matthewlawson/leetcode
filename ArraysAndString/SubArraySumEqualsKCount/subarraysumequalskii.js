/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 export const subarraySum = function (nums, k) {
    // 1. keep a running count of sums.
    // 2. Keep a map of "remainders" to the seen count of that remainder
    // 3. if sum - k == an element of the Map increment count by value in the map
    // 4. Increment or set item in map at position runningTotal.
    let seenCount = 0;
    let runningTotalsToSeenCount = new Map();
    runningTotalsToSeenCount.set(0, 1);

    // Zero is a special case that wont be in prefix sum but mean it is valid
    let runningTotal = 0;
    for(let i = 0; i < nums.length; i++) {
        runningTotal += nums[i];

        const remainderRequired = runningTotal - k;

        if(runningTotalsToSeenCount.has(remainderRequired)) {
            seenCount+= runningTotalsToSeenCount.get(remainderRequired);
        }

        if(runningTotalsToSeenCount.has(runningTotal)) {
            // Increment value at sum
            runningTotalsToSeenCount.set(runningTotal, runningTotalsToSeenCount.get(runningTotal) + 1)
        }
        else {
            runningTotalsToSeenCount.set(runningTotal, 1);
        }


    }

    return seenCount;


}
