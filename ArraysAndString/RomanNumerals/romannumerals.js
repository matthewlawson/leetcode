/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let map = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    let pointer = 0;
    while(pointer < s.length) {
        let numeral = s[pointer]
        if(numeral == "I") {
            if(s[pointer+1] == "V" ){
                sum+= 4;
                pointer+=2
            }
            else if(s[pointer+1] == "X") {
                sum += 9;
                pointer +=2;
            }
            else {
                sum += map[numeral];
                pointer ++;
            }
        }
        else if(numeral == "V") {
            sum += map[numeral];
            pointer ++;
        }
        else if(numeral == "X") {
            if(s[pointer+1] == "L" ){
                sum+= 40;
                pointer+=2
            }
            else if(s[pointer + 1] == "C") {
                sum += 90;
                pointer +=2;
            }
            else {
                sum += map[numeral];
                pointer ++;
            }
        }
        else if(numeral == "L") {
            sum += map[numeral];
            pointer ++;
        }
        else if(numeral == "C") {
            if(s[pointer+1] == "D" ){
                sum+= 400;
                pointer+=2
            }
            else if(s[pointer + 1] == "M") {
                sum += 900;
                pointer +=2;
            }
            else {
                sum += map[numeral];
                pointer ++;
            }
        }
        else if(numeral == "D"){
            sum += map[numeral];
            pointer ++;
        }

        else if(numeral == "M"){
            sum += map[numeral];
            pointer ++;
        }

    }

    return sum
};
