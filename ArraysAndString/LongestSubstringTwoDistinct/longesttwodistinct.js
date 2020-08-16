/**
 * @param {string} s
 * @return {number}
 */
export default function(s) {
    let n = s.length;
    if(n < 3) {
        return s.length;
    }
    const maxDistinct = 2;
    let left = 0;
    let right = 0;
    let hashmap = new Map();
    let max_len = 2;

    while(right < n) {
        // if(hashmap.size < 3 ) {
            hashmap.set(s[right], right);
            right++;
        // }
        if(hashmap.size == 3) {
            // Remove first inserted key from the map & set left to new left most....
            // positionMap.keys()[0]
            const deleteIndex = hashmap.values().next().value
            hashmap.delete(s[deleteIndex])
            left = deleteIndex + 1 ;
        }
        max_len = Math.max(max_len, right - left);
    }
    return max_len;
};
