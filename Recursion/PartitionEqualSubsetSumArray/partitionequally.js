export default (nums) => {
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
        total+=nums[i];
    }

    // If it is odd umber we definitely cant make a partition ...
    if(total % 2 != 0) {
        return false;
    }
    let target = total / 2;

    nums.sort((a, b) => b - a); // n log n

    function walk(remaining, index) {
        if(nums[index] > remaining) {
            return false;
        }

        if(remaining < 0) {
            return false
        }
        if(index >= nums.length) {
            return false;
        }

        if(nums[index] == remaining) {
            return true;
        }
        return walk(remaining - nums[index], index + 1) || walk(remaining, index + 1)
    }

    return walk(target, 0);
}
