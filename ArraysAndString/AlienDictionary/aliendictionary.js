/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
export const isAlienSorted = function (words, order) {
    const letterPosition = new Map();
    for (let i = 0; i < order.length; i++) {
        letterPosition.set(order[i], i);
    }
    // console.log(letterPosition);
    for (let i = 1; i < words.length; i++) {
        const sorted = compareWord(words[i - 1], words[i], letterPosition);
        if (!sorted) {
            return false;
        }
    }
    return true;
};

function compareWord(prev, current, letterPosition) {
    for (let i = 0; i < prev.length; i++) {
        if (prev[i] == current[i]) {
            // console.log('same');
        }
        else if (current[i] == undefined || letterPosition.get(prev[i]) > letterPosition.get(current[i])) {
            // console.log(prev[i], current[i], i, false)
            return false
        }
        else {
            // console.log(prev[i], current[i], i, true)
            return true;
        }
    }
    return true;
}
