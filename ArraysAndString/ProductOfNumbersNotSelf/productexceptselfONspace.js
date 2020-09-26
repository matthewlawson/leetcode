/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProducts = []
    leftProducts[0] = 1;
    // Make map of all index => products to the left
    for(let i = 1; i < nums.length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
    }

    let rightTotal = 1;
    // rather than making another map of all index => product to the right, we can do this on the fly
    for(let i = nums.length - 1; i >= 0; i--) {
        leftProducts[i] = leftProducts[i] * rightTotal;
        rightTotal *= nums[i];
    }
    return leftProducts;

};

export default productExceptSelf;
