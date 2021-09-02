/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 export  function merge (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    const output = [];

    for(let i = 0; i < intervals.length; i++) {
        // peek the stack
        const topInterval = output[output.length - 1];
        if(!topInterval) {
            output.push(intervals[i]);
            continue;
        }
        // Is this start time before end of previous end time;
        // Because we sorted - if it is then it overlaps.
        if(intervals[i][0] <= topInterval[1]) {
            // Overlap found
            topInterval[1] =Math.max(intervals[i][1], topInterval[1]);
            output[output.length - 1] = topInterval;
        }
        else {
            // Not overlap - add to array
            output.push(intervals[i]);
        }
    }

    return output;
};
