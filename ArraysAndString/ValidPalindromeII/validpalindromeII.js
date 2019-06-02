/**
 * @param {string} s
 * @return {boolean}
 */
export default function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left <= right && s[left] == s[right]) {
    left++;
    right--;
  }

  if (left >= right) {
    return true;
  } else if (
    palindromeInRange(s, left + 1, right) ||
    palindromeInRange(s, left, right - 1)
  ) {
    return true;
  }
  return false;
}

const palindromeInRange = (s, left, right) => {
  while (left <= right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// if (s[left] == s[right]) {
//   left++;
//   right--;
// } else {
//   if (s[left + 1] == s[right]) {
//     left++;
//     skippedCount++;
//   } else if (s[left] == s[right - 1]) {
//     right--;
//     skippedCount++;
//   }
//   if (skippedCount > 1) {
//     return false;
//   }
// }
