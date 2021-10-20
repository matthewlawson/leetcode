export default function(A) {
  // Brute force ...
  let output = A.map(value => value * value);

  // output.sort();
  return output.sort(function(a, b) {
    return a - b;
  }); // O (n log n)
}


/**
 * @param {number[]} A
 * @return {number[]}
 */
 export var sortedSquaresLinear = function(nums) {
  let result = [];

  let left = 0;
  let right = nums.length - 1;
  for(let i = nums.length - 1; i >=0 ; i --) {
      if(Math.abs(nums[left]) < Math.abs(nums[right])) {
          result[i] = nums[right] * nums[right];
          right --;
      }
      else {
          result[i] = nums[left] * nums[left];
          left++
      }
  }
  return result;
}
