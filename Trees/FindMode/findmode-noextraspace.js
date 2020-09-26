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
    let maxCount = 0;
    let currentCount = 0;
    let currentValue;
    let modeCount = 0;
    function handleValue(value) {
        console.log(value);
        if(value == currentValue) {
            currentCount ++;
        }
        else {
            currentCount = 1;
            currentValue = value;
        }
        if(currentCount > maxCount) {
            maxCount = value;
            // A new max mode ...
            modeCount = 1
            output = [value]
        }
        else if(currentCount == maxCount) {
            modeCount ++
            if(output) {
                output.push(value);
            }
        }
    }

    function explore(node) {
        if(node) {

            explore(node.left, total);
            handleValue(node.val);
            explore(node.right, total);
        }
    }

    explore(root, 0);
    let output = [];



    return output;
};
};
