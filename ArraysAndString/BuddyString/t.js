/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    if(s.length != goal.length) {
        return false;
    }
    if(s == goal) {
        // Is there a duplicate char in s? if so we can swap ...
        if(s.length > new Set(s.split('')).size) {
            return true;
        }
    }
    let dif = [];
    for (let i = 0; i < s.length; ++i) {

        if (s.charAt(i) != goal.charAt(i)){
            dif.push(i);
        }
    }
        return dif.length == 2 && s.charAt(dif[0]) == goal.charAt(dif[1]) && s.charAt(dif[1]) == goal.charAt(dif[0]);
};

