/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 export var wordBreak = function(s, wordDict) {
    const stringTests = new Map();
    return helper(s, new Set(wordDict), 0, stringTests);
};
/**
 * @param {string} s
 * @param {Set<string>} wordDict
 * @param {number} start
 * @param {Map<number, boolean>} stringTests
 * @return {string}
 */
function helper(s, words, start, stringTests) {
    if(start == s.length) {
        return true;
    }
    if(stringTests.has(start)) {
        return stringTests.get(start)
    }
    for(let end = start + 1; end <= s.length; end++) {

        if(words.has(s.substring(start, end)) && helper(s, words, end, stringTests)) {
            stringTests.set(start, true);
            return true
        }
    }
    stringTests.set(start, false);
    return false
}
