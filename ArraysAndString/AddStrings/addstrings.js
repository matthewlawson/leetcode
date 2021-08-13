export function addStrings(num1, num2) {
    let n1Pointer = num1.length - 1;
    let n2Pointer = num2.length - 1;

    let carry = 0;
    let result = [];
    while(n1Pointer >= 0 || n2Pointer >=0) {
        // Guard for negative index - one finishges first..
        let n1Digit = n1Pointer >= 0 ? Number.parseInt(num1[n1Pointer]) : 0;
        let n2Digit = n2Pointer >= 0 ? Number.parseInt(num2[n2Pointer]) : 0;
        const sum = n1Digit + n2Digit + carry
        result.push(sum % 10);
        carry = Math.floor(sum / 10)
        n1Pointer --;
        n2Pointer --;
    }
    if(carry) {
        result.push(carry);
    }
    let stringResult = "";
    for(let i = result.length - 1; i >= 0; i--) {
        stringResult += result[i];
    }
    return stringResult;

}
