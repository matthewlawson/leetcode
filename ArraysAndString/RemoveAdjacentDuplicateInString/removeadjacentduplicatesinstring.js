/**
 * @param {string} s
 * @return {string}
 */
 export var removeDuplicates = function(s) {
    return removeHelper(s)
};
/**
 * @param {string} s
 * @return {string}
 */
 export var removeDuplicatesStack = function(s) {
    return removeHelperStack(s)
};
/**
 * @param {string} s
 * @return {string}
 */
function removeHelperStack(s) {
    const output = [];
    for(let i = 0; i< s.length; i++) {
        if(s[i] == output[output.length - 1]) {
            output.pop();
            continue;
        }
        output.push(s[i]);
    }
    let newString = output.join('');
    if(newString.length == s.length) {
        return newString;
    }
    else {
        return removeHelperStack(newString);
    }
}

function removeHelper(s) {
    let newString = "";
    for(let i = 0; i< s.length; i++) {
        if( s[i] == newString[newString.length - 1]) {
            newString = newString.substring(0, newString.length - 1)
            continue;
        }

        newString += s[i];;
    }

    if(newString.length == s.length) {
        return newString;
    }
    else {
        return removeHelper(newString);
    }
}
