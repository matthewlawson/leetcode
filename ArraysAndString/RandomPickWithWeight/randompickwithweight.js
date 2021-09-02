/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.weights = w;
    this.total = 0;
    for(let weight of w) {
        this.total += weight;
    }
    this.boundaries = [w[0]];
    // boundaries[0] = ;
    for(let i = 1; i < w.length; i ++) {
        this.boundaries[i] = w[i] + this.boundaries[i-1];
    }

};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
    const probability = Math.random() * this.total;
    for(let i = 0; i< this.boundaries.length; i++) {
        if(probability < this.boundaries[i] ) {
            return i;
        }
    }
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/
