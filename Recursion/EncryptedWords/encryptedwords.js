// Add any extra import statements you may need here


// Add any helper functions you may need here

/**
 *
 * @param {string} s
 * @returns {string}
 */
export function findEncryptedWord(s) {
    if(s.length <= 1) {
        return s;
    }
    // console.log(s);
    // let output = '';
    // abcde = i = 2
    // length = 5, mCI = 2
    // abcd = i = 1
    // length = 4, mci = 1
    let midCharIndex = Math.floor((s.length - 1 ) / 2);
    return `${s[midCharIndex]}${findEncryptedWord(s.substring(0, midCharIndex))}${findEncryptedWord(s.substring(midCharIndex + 1))}`

  }

