/**
  const input = [1,2,3]
  const output = [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function(nums) {
  return permuteHelper(nums, [], []);
}

/**
 * @param {number[]} frontOfArray
 * @param {number[]} remainderToRearrange
 * @param {number[]} valueSoFar
 * @return {number[][]}
 */
const permuteHelper = (frontOfArray, remainderToRearrange, valueSoFar) => {
  if (frontOfArray.length == 0) {
    // Arrays in js are references so can get manipulated further after they are done...
    valueSoFar.push([...remainderToRearrange]);
  } else {
    for (let i = 0; i < frontOfArray.length; i++) {
      // Choose
      let digit = frontOfArray[i];
      remainderToRearrange.push(digit);
      // Removes that digit
      frontOfArray.splice(i, 1);
      // explore
      permuteHelper(frontOfArray, remainderToRearrange, valueSoFar);
      // Restore the array to what it was before this permutation.
      frontOfArray.splice(i, 0, digit);
      // remove from chosen
      remainderToRearrange.pop();
    }
  }
  return valueSoFar;
};

/*
 Not really my solution but a port from the java leetcode solution.
*/
export const permuteSecond = nums => {
  function backtrack(inputLength, nums, output, start) {
    if (start === inputLength) {
      output.push([...nums]);
    }
    for (let i = start; i < inputLength; i++) {
      _swap(nums, start, i);
      backtrack(inputLength, nums, output, start + 1);
      // Swap back..
      _swap(nums, start, i);
    }
  }
  let output = [];
  let inputLength = nums.length;
  backtrack(inputLength, nums, output, 0);
  return output;
};

const _swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
