/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let total = 0;
    let valCount = new Map();
    function explore(node) {
        if(node) {
            // Traversing ...
            if(valCount.has(node.val)) {
                let currentCount = valCount.get(node.val)
                valCount.set(node.val, currentCount + 1);
            }
            else {
                valCount.set(node.val, 1);
            }
            explore(node.left, total);
            explore(node.right, total);
        }
    }

    explore(root, 0);

    let max = -1;
    let output = [];
    // Find the max

    // Do this all in one ....
    valCount.forEach((value, key) => {
        // Is it a new maxvalue?
        if(value > max) {
            max = value;
            // override the current output
            output = [key];
        }
        else if(value == max) {
            // joint max - add it to the array.
            output.push(key)
        }

    });

    return output;
};
};
