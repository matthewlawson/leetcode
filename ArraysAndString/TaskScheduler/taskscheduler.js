/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
export default function(tasks, n) {
    if(n == 0) {
        return tasks.length;
    }
    let frequencies = [];
    // Make map of frequencies
    const baseCharValue = "A".charCodeAt();
    for(let i = 0; i < tasks.length; i++) {
        const charIndexValue = tasks[i].charCodeAt() - baseCharValue;
        if(!frequencies[charIndexValue]) {
            frequencies[charIndexValue] = 1
        }
        else {
            // Increment count...
            frequencies[charIndexValue] = frequencies[charIndexValue] + 1;
        }
    }
    frequencies.sort((a, b) => b - a); // n log n - bound by n = 26
    const max = frequencies[0];
    // Number of shared max ...
    let maxCount = 0;
    for(let i = 0; i< frequencies.length; i++) {
        if(frequencies[i] == max) {
            maxCount++;
        }
    }

    const minLength = (max - 1 ) * (n + 1) + 1;
    return Math.max(tasks.length, minLength + maxCount - 1);
};
