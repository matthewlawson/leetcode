export default function(nums) {
    // n is length of array
    // add 0 .. n to a set.
    // loop over nums, remove each value from set. THere should be one remaining value. That is it....
    let n = nums.length;
    let set = new Set([...Array(n + 1).keys()])

    for(let i = 0; i < n; i++) {
        set.delete(nums[i]);
    }
    return set.values().next().value;
};
