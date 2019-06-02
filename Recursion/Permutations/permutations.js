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

const permuteHelper = (frontOfArray, remainderToRearrange, valueSoFar) => {
  if (frontOfArray.length == 0) {
    // Arrays in js are references so can get manipulated further after they are done...
    valueSoFar.push([...remainderToRearrange]);
  } else {
    for (let i = 0; i < frontOfArray.length; i++) {
      // Choose
      let digit = frontOfArray[i];
      remainderToRearrange.push(digit);
      frontOfArray.splice(i, 1);
      // explore
      permuteHelper(frontOfArray, remainderToRearrange, valueSoFar);
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
  function backtrack(inputLength, nums, output, first) {
    if (first === inputLength) {
      output.push([...nums]);
    }
    for (let i = first; i < inputLength; i++) {
      _swap(nums, first, i);
      backtrack(inputLength, nums, output, first + 1);
      // Swap back..
      _swap(nums, first, i);
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
