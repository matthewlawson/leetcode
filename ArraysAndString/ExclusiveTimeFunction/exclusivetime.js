/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
export var exclusiveTime = function (n, logs) {
    // ["0:start:0", "0:start:1", "0:start:2", "0:end:3", "0:end:4", "0:end:5"]
    let callStack = [];
    const functionIdToTime = Array(n).fill(0);
    let prevTime;
    for(let log of logs) {
        let [pid, command, time] = log.split(':');
        pid = Number(pid);
        time = Number(time);

        if(command == "start") {
            if(callStack.length > 0) {
                // Get top of stack
                functionIdToTime[callStack[callStack.length - 1]] += time - prevTime;
            }
            // console.log(pid)
            callStack.push(pid);
            prevTime = time;
        }
        else if(command == "end") {
            const last = callStack.pop();
            functionIdToTime[last] += time - prevTime + 1;
            prevTime = time + 1
        }
    }

    return functionIdToTime;

};
