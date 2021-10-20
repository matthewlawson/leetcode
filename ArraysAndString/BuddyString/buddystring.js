/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
export var buddyStrings = function (s, goal) {
    if (s.length != goal.length) {
        return false;
    }
    if (s == goal) {
        // Is there a duplicate char in s? if so we can swap ...
        if (s.length > new Set(s.split('')).size) {
            return true;
        }
    }
    // Count differences /
    let dif = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i] != goal[i]) {
            dif.push(i);
        }
    }

    if (dif.length != 2) {
        return false;
    }
    const indexOfDifOne = dif[0];
    const indexOfDifTwo = dif[1];
    return s[indexOfDifOne] == goal[indexOfDifTwo] && s[indexOfDifTwo] == goal[indexOfDifOne];


};

