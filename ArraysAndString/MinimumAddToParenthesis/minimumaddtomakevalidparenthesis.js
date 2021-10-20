/**
 * @param {string} s
 * @return {number}
 */
 export var minAddToMakeValid = function(s) {
    let ans = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            balance += 1;
        }
        else {
            balance -= 1
        }

        if(balance == -1) {
            ans++;
            balance++
        }
    }

    return ans + balance
};


export var minAddToMakeValid2 = function(s) {
    let brackets = [];
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            brackets.push(1);
        }
        else if(s[i] == ")" && brackets.length == 0) {
            ans++;
        }
        else if(s[i] == ")"){
            brackets.pop();
        }

    }
    return ans + brackets.length;

};

export var minAddToMakeValid3 = function(s) {
    let ans = 0;
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            balance ++;
        }
        else {
            balance --;
        }

        if(balance == -1){
            ans++;
            balance++
        }

    }
    return ans + balance;

};
