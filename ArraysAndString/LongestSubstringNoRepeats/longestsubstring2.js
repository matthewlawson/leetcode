/**
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
    let longestSequence = 0;
    let seenLetters = new Set();
    let leftPointer = 0;
    let rightPointer = 0;
    while(rightPointer < s.length) {
        if(!seenLetters.has(s[rightPointer])) {
            seenLetters.add(s[rightPointer]);
            rightPointer ++;
            // OR gap between left and right ?
            // longestSequence = Math.max(longestSequence, seenLetters.size);
            longestSequence = Math.max(longestSequence, rightPointer - leftPointer);
        }
        else {
            seenLetters.delete(s[leftPointer]);
            leftPointer++;
        }
    }
    return longestSequence;
};
