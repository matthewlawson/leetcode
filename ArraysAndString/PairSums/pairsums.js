// Add any extra import statements you may need here


// Add any helper functions you may need here


export function numberOfWays(arr, k) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = [];
        }
        map[arr[i]].push(i);
    }

    let pairs = new Set();

    for (let i = 0; i < arr.length; i++) {
        let remainder = k - arr[i];
        // Do we have a remainder in the map? - if so that is a pair..
        if (map[remainder]) {
            // A pair is found ...
            // Now carefully add the pair of array indexes  to a set for counting and checking of uniqueness ,,,
            for (let j = 0; j < map[remainder].length; j++) {
                if(i == map[remainder][j]) {
                    continue;
                }
                const x = i < map[remainder][j] ? i : map[remainder][j];
                const y = i > map[remainder][j] ? i : map[remainder][j];

                pairs.add(`${x}_${y}`);
            }
        }
    }

    return pairs.size;

}
