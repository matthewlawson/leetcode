

export class SparseVector {
    /**
     *
     * @param {number[]} nums
     */
    map;
    constructor(nums) {
        // this.nums = nums;
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] != 0) {
                map.set(i, nums[i]);
            }
        }
        this.map = map;
    }
    /**
     *
     * @param {SparseVector} vector
     * @return {number}
     */
    dotProduct(vector) {
        // console.log(this.nums, vector.nums)
        let sum = 0;
        vector.map.forEach((value, key) => {
            if(this.map.has(key)) {
                sum += this.map.get(key) * value;
            }
        })


        return sum;
    }
}


// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
