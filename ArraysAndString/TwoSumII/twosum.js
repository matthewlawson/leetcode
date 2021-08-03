/**
 *
 * @param {Array<number>} numbers
 * @param {number} target
 * @return {Array<number>}
 */
export function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const total = numbers[left] + numbers[right]
        if (total == target) {
            return [left + 1, right + 1];
        }
        if (total < target) {
            left++;
            continue
        }
        if (total > target) {
            right--;
            continue;
        }
    }

}
