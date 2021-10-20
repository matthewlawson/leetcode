

// o(n^2) version.
// Array can be huge - how to do o(n)????
/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function countSubarrays(arr) {
    // Write your code here
    let output = [];
    for(let i = 0; i < arr.length; i++) {
      let count = 1;
      let value = arr[i];
      let left = i - 1;
      while(left >= 0 ) {
        if(arr[left] < value) {
          count ++;
          left --;
        }
        else {
          break;
        }
      }

      let right = i + 1;
      while(right < arr.length) {
        if(arr[right] < value) {
          count ++;
          right++
        }
        else {
          break;
        }
      }
      output[i] = count;
    }

    return output;
  }




