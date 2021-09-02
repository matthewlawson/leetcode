let operators = new Set(['*', '/', '+', '-']);
/**
 * @param {string} s
 * @return {number}
 */
export var calculate = function (s) {
    /**
     * 1. Remove spaces
     * 2. Find division problem.
     * 3. find multiplication
     * 4. left to right (2 per time) addition / subtraction.
     *  */
    //  s = // 10 * 3 + 2
    let string = '';

    // O(n)
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            string += s[i];
        }
    }
    // string = 10*3+2
    return Number(helper(string));

};

function helper(s) {
    // do all division.
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '/') {
            let leftNumber = findLeftNumber(s, i);
            let rightNumber = findRightNumber(s, i);
            const subProblem = Math.floor(leftNumber / rightNumber);
            // Replace 3 / 5 with subproblem;
            const newProblem = s.replace(`${leftNumber}/${rightNumber}`, subProblem);
            return helper(newProblem)
        }
    }
    // Do all multiples
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '*') {
            let leftNumber = findLeftNumber(s, i);
            let rightNumber = findRightNumber(s, i);
            const subProblem = leftNumber * rightNumber;
            const newProblem = s.replace(`${leftNumber}*${rightNumber}`, subProblem); // 30 + 2
            return helper(newProblem)
        }
    }

    // Do addition or substraction left to right.
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '+' || s[i] == '-') {
            // How to handle "-5+2"
            let leftNumber = findLeftNumber(s, i);
            if(isNaN(leftNumber)) {
                continue;
            }
            let rightNumber = findRightNumber(s, i);

            let subProblem;
            if(s[i] == "+") {
                subProblem = leftNumber + rightNumber
            }
            else {
                // console.log(leftNumber, rightNumber)
                subProblem = leftNumber - rightNumber;
            }
            const newProblem = s.replace(`${leftNumber}${s[i]}${rightNumber}`, subProblem);
            return helper(newProblem)
        }
    }

    return s;

}
// s = 10*3+2
// i = 2
// 3+2*2 3
function findLeftNumber(s, i) {
    // i is position of an operator
    let leftNumber = '';
    const startSearch = i - 1;
    // const operators = new Set(['*', '/', '+'])
    const subtract = '-';
    for (let j = startSearch; j >= 0; j--) {
        if (!operators.has(s[j]) || s[j] == subtract) {
            leftNumber = `${s[j]}${leftNumber}`; // '0+'', '10'
        }
        if(s[j] == subtract) {
            break;
        }
        else {
            break;
        }
    }
    return Number(leftNumber)
}

//  3+2*2 3
// console.log(s, i);
function findRightNumber(s, i) {
    // i is position of an operator
    let rightNumber='';
    for (let j = i + 1; j < s.length; j++) {
        if (!operators.has(s[j])) {
            rightNumber += `${s[j]}`; // rn = 3
            // console.log(rightNumber)
        }
        else {
            break;
        }
    }
    return Number(rightNumber);
}

