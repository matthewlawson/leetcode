// n^2 passes ...
// memoise some array ranges?
// Pre calculate values ??
// Make a pre-pass to make an array at i = sum of all previous?

export function continuousSubArraySum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j];
            if (total % target == 0) {
                return true;
            }
        }
    }
    return false;
}

export function continuousSubArraySum2(nums, target) {
    if(nums.length <= 1) {
        return false
    }
    let sum = 0;
    let map = new Map();
    // map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (target != 0) {
            sum %= target;
        }
        // console.log(i, target, nums[i], nums[i-1]);
        if( nums[i] === 0 && nums[i-1] === 0) {
            return true;
        }
        // const prevTotal = map.get(sum);
        // if (prevTotal) {
        //     if (i - prevTotal > 1) {
        //         return true;
        //     }
        // }
        if((sum == 0 || map.has(sum) && (i - map.get(sum) > 1 ))) {
            return true;
        }
        else {
            map.set(sum, i);
        }
    }

    return false;
}
