let map = new Map
    // map.set(0, -1);
    let remainder = 0;

    for(let i = 0; i < nums.length; i++) {
        remainder += nums[i];
        if(k > 0) {
            remainder = remainder % k
        }
        if(map.get(remainder)) {
            // compare difference
            // The last location this remainder was seen ....
            if(i - map.get(remainder) > 1) {
                return true;
            }

        }
        else {
            map.set(remainder, i);
        }
    }

    return false;
