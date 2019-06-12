export default (nums, k) => {
  // Handle edge cases
  // Make prefix map on top of array
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  // Make map of value -> array index
  let valueMap = new Map();
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    // Have we previously seen an answer that would make the total == k?
    // If we have seen this value before then there is a range that equals k
    const requiredPreviousValue = nums[i] - k;
    // Special case for when the value is the enture range.
    if (nums[i] == k) {
      max = i + 1;
    } else if (valueMap.has(requiredPreviousValue)) {
      // What is the max range?
      const indexOfRequiredValue = valueMap.get(requiredPreviousValue);
      const distanceFromRequiredValue = i - indexOfRequiredValue;
      max = Math.max(max, distanceFromRequiredValue);
    }
    if (!valueMap.has(nums[i])) {
      valueMap.set(nums[i], i);
    }
  }

  return max;
};
