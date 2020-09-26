/**
 * @param {string} digits
 * @return {string[]}
 */
const mapOfDigits = {
    "2": ["a","b","c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ['m', "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
    if(digits == "") {
        return []
    }
    // generating permutations ...
    let output = [];
    function permute(combination, index) {
        if(combination.length == digits.length ) {
            output.push(combination);
            return;
        }
        let digit = digits[index]
        let letters = mapOfDigits[digit];

        for (let j = 0; j < letters.length; j++) {
            permute(combination + letters[j], index + 1);
        }


    }
    permute("", 0);

    return output;
};

export default letterCombinations;
