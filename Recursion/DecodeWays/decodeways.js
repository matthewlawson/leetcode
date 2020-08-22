/**
 * @param {string} string
 * @return {number}
 */
export default function(string) {
    const memo = new Map();
    function walk(string, index) {
        if(string[index] == "0") {
            return 0;
        }
        if(index >= string.length - 1) {
            return 1;
        }

        if(memo.has(index)) {
            return memo.get(index);
        }
        let answer = walk(string, index + 1);

        if(parseInt(string.substr(index, 2)) <= 26) {
            answer += walk(string, index + 2);
        }
        memo.set(index, answer);
        return answer;
    }


    if(string == "0" || string == "") {
        return 0;
    }
    return walk(string, 0);

};
