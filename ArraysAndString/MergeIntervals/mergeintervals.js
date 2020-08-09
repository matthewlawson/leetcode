/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export  function merge (intervals) {
    let output= [];
    intervals.sort((a ,b) => a[0] - b[0]);


    for(let i = 0 ; i< intervals.length; i++) {
        if(output.length == 0 || output[output.length - 1][1] < intervals[i][0]) {
            // No overlap
            output.push(intervals[i]);
        }
        else {
            // Merge the top of the stack
            output[output.length - 1][1] = Math.max(intervals[i][1], output[output.length - 1][1])
        }
    }

    return output;

};
