/**
 * @param {number[]} nums
 * @return {number}
 */
export default function(nums) {
    for (let i = 0; i< nums.length; i++){
        const prev = findPreviousDifferent(nums, i);
        const next = findNextDifferent(nums, i);
        const current = nums[i];
        if(current > prev && current > next) {
            return i;
        }
    }
};

function findPreviousDifferent(nums, i){
    if(i == 0) {
        return Number.MIN_SAFE_INTEGER;
    }

    if(nums[i - 1] == nums[i]) {
        return findPreviousDifferent(nums, i - 1);
    }
    else {
        return nums[i - 1];
    }
}


function findNextDifferent(nums, i){
    if(i == nums.length - 1) {
        return Number.MIN_SAFE_INTEGER;
    }

    if(nums[i + 1] == nums[i]) {
        return findNextDifferent(nums, i + 1);
    }
    else {
        return nums[i + 1];
    }
}
