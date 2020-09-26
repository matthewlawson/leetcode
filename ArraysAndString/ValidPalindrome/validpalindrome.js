/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    function isValidChar(string) {
        let charValue = string.charCodeAt(0)
        return (charValue >= "a".charCodeAt(0) && charValue <= "z".charCodeAt(0)) ||
            (charValue >= "0".charCodeAt(0) && charValue <= "9".charCodeAt(0));
    }
    let left = 0;
    let right = s.length - 1;
    while(left <= right) {
        if(!isValidChar(s[left].toLowerCase())) {
            left++;
            continue;
        }
        if(!isValidChar(s[right].toLowerCase())) {
            right--;
            continue;
        }

        if(s[left].toLowerCase() == s[right].toLowerCase()) {
            left ++;
            right --;
        }
        else {
            return false
        }

    }
    return true;
};

export default isPalindrome;
