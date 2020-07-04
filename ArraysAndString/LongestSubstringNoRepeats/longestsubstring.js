/*public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        Map<Character, Integer> map = new HashMap<>(); // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            map.put(s.charAt(j), j + 1);
        }
        return ans;
    }
}
*/
// abcabcbb
export default input => {
  let ans = 0;
  let i = 0;
  let map = new Map();
  for (let j = 0; j < input.length; j++) {
    if (map.has(input[j])) {
      i = Math.max(map.get(input[j], i));
    }
    ans = Math.max(ans, j - i + 1);
    map.set(input[j], j + 1);
  }
  return ans;
};
