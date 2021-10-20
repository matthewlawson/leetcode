/**
 * @param {string} s
 * @return {number}
 */
 export var myAtoi = function(s) {
    let start = 0;
    while(s[start] == " ") {
        start++;
    }

    let sign = 1;
    if(s[start] == "-" || s[start] == "+") {
        sign = s[start] == "-" ? -1 : 1; // Either.
        start ++;
    }
    while(s[start] == "0") {
        start++;
        // ignore leading zeros.
    }
     // Handle leading 0's?
    let value = 0;
    while(s.charCodeAt(start) >= "0".charCodeAt(0) && s.charCodeAt(start) <= "9".charCodeAt(0)) {
        // FOund a digit...
        const digit = s[start]
        value = 10 * value + Number.parseInt(digit);
        start ++;
    }

    // How to do bounds check without converting to int?
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31);
    const answer = value * sign
    // console.log(answer);
    if(answer < min) {
        return min;
    }
    if(answer > max) {
        return max;
    }
    return  answer;
};
