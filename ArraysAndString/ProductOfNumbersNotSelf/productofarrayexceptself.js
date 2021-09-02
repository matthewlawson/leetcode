/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function productOfArrayExceptSelf2(nums) {
    // make array containing products up to index i
    let left = [1];
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    let right = [];
    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
}

export function productOfArrayExceptSelf3(nums) {
    // Same as answer2 but more code golf to reduce memory space.
    // Use answer for keeping trakck of lefts
    let answer = [1];
    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // This total is constant space ...
    let rightRunningProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightRunningProduct;
        rightRunningProduct = rightRunningProduct * nums[i];
    }
    return answer;
}
