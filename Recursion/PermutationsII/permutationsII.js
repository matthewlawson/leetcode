/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function(nums) {
  return permuteHelper(nums, [], []);
}

const permuteHelper = (
  front,
  rearrangement,
  permutations,
  seenPermuations = new Set()
) => {
  // Terminate recursion
  if (front.length === 0 && !seenPermuations.has(rearrangement.toString())) {
    permutations.push([...rearrangement]);
    seenPermuations.add(rearrangement.toString());
  } else {
    // choose a digit to start with,
    // explore the permutations
    // reset value fro next iteration

    for (let i = 0; i < front.length; i++) {
      // Pick
      const digit = front[i];
      rearrangement.push(digit);
      front.splice(i, 1);
      // Explore
      permuteHelper(front, rearrangement, permutations, seenPermuations);

      // Reset
      rearrangement.pop();
      front.splice(i, 0, digit);
    }
  }
  return permutations;
};
