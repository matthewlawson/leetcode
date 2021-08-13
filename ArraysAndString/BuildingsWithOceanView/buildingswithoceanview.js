/**
 * @param {number[]} heights
 * @return {number[]}
 */
 export function findBuildings(heights) {
    // Track max working backwards.
    let max = 0;
    let result = [];
    for (let i = heights.length - 1; i>=0; i--) {
        if(heights[i] > max) {
            result.push(i);
        }
        max = Math.max(max, heights[i]);
    }

    return result.sort(); // n log n
};

/**
 * @param {number[]} heights
 * @return {number[]}
 */
 export function findBuildings2(heights) {
    // Track max working backwards.
    let max = 0;
    let result = [];
    for (let i = heights.length - 1; i>=0; i--) {
        if(heights[i] > max) {
            result.push(i);
        }
        max = Math.max(max, heights[i]);
    }

    return result.reverse();
};

/**
 * @param {number[]} heights
 * @return {number[]}
 */
 export function findBuildings3(heights) {
    // Track max working backwards.
    let max = 0;
    let result = [];
    for (let i = heights.length - 1; i>=0; i--) {
        if(heights[i] > max) {
            result.push(i);
        }
        max = Math.max(max, heights[i]);
    }
    let sortedResult = [];
    for (let i = result.length - 1; i>=0; i--) {
        sortedResult.push(result[i]);
    }

    return sortedResult;
};

const _swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
