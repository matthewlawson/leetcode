/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];
    function backtrack(string, left, right) {
        if(left == n && right == n) {
            output.push(string);
            return;
        }
        if(left < n) {
            backtrack(string + "(", left+1, right);
        }
        if(right < left) {
            backtrack(string + ")", left, right+1);
        }
    }
    backtrack("", 0, 0);
    return output;
};

export default generateParenthesis;
