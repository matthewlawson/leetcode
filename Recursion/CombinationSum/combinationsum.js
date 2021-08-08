export function combinationSum(nums, target) {
    const output = [];
    nums.sort();
    dfs(0, 0, [], nums, target, output);

    return output;
}

function dfs(sum, position, permToTest, nums, target, output) {
    if(sum == target) {
        output.push(permToTest)
    }
    if (sum > target) {
        return;
    }
    for(let i = position; i < nums.length; i++) {
        dfs(sum + nums[i], i, [...permToTest, nums[i]], nums, target, output);
    }
}
