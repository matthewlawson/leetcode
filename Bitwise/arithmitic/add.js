/**
 *
 * @param {number} a
 * @param {number} b
 */
export function add(a, b) {
    let sum = (a ^ b); // Get position of all bits without carry
    let carry = (a & b) << 1; // Shift carry 1 as it always applies to the next place over

    if(sum & carry) {
        // There is still a carry ..
        return add(sum, carry);
    }
    else {
        return sum ^ carry; // We know this addition will not result in a carry, so we're done.
    }
}

/**
 *
 * @param {number} a
 * @param {number} b
 */
export function add2(a, b) {
    let sum = (a ^ b); // Get position of all bits without carry
    let carry = (a & b) << 1; // Shift carry 1 as it always applies to the next place over

    while(carry != 0) { // The next iteration has a carry ...
        let prevSum = sum;
        sum = (sum ^ carry); // Get position of all bits without carry
        carry = (prevSum & carry) << 1; // Shift carry 1 as it always applies to the next place over
    }
    return sum;
}
