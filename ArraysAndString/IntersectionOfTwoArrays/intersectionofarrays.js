// brute force
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export function bruteForce(nums1, nums2) {
    let output = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                output.push(nums1[i]);
                nums2[j] = -1;
                break;
            }
        }
    }

    return output;
}

export function optimisedOne(nums1, nums2) {
    let nums2Map = new Map();
    let output = [];
    // console.log(nums1, nums2)
    // // Make hashmap of smaller array for less memory consumption....
    if(nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;

    }
    // if (nums1.length > nums2.length) {
    //     let tmp = nums1;
    //     nums1 = nums2;
    //     nums2 = tmp;
    //   }
    for (let i = 0; i < nums2.length; i++) {
        const existingValue = nums2Map.get(nums2[i]);
        if (existingValue) {
            nums2Map.set(nums2[i], existingValue + 1);
        }
        else {
            nums2Map.set(nums2[i], 1);
        }
    }

    for( let i = 0; i < nums1.length; i++) {
        const existingValue = nums2Map.get(nums1[i]);

        if(existingValue && existingValue >=1) {
            output.push(nums1[i]);
            nums2Map.set(nums1[i], existingValue -1);
        }
    }

    return output;
}
