/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 export var topKFrequent = function(nums, k) {
    // 1. Count frequency into anew Map
    // {'1': 3, 2: 2, 3: 1}
    // 2. Traverse new DS put into a "Priority Queue", Element is key, priority is value.
    // 3. Call pq.poll() k times to remove most frequent.

    // pq.add is log n
    // priority queue does nto exist in JS...
    // Alternative - bucket sort, traverse backwards and pop off the first k values.

    let countsOfNum = {};

    for(let i = 0; i < nums.length; i++) {
        if(!countsOfNum[nums[i]]) {
            countsOfNum[nums[i]] = 1;
            continue;
        }
        countsOfNum[nums[i]] = countsOfNum[nums[i]] + 1;
    }

    let bucket = [];

    for(let key in countsOfNum) {
        const count = countsOfNum[key];
        if(!bucket[count]) {
            bucket[Number(count)] = [Number(key)]
            continue;
        }
        bucket[count].push(Number(key));
    };
    let output = [];
    for(let i = bucket.length -1; i > 0; i--) {
        // console.log(bucket[i].length)
        if(output.length == k) {
            break;
        }
        if( bucket[i] ) {
            for(let j = 0; j < bucket[i].length; j++) {

                output.push(bucket[i][j]);
                // console.log(output);

                if(output.length == k) {
                    break;
                }
            }
        }

    }
    return output;
};
