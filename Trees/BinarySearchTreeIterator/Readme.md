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
 */
let nodes = [];
let index = 0 ;
var BSTIterator = function(root) {
    nodes = [];
    index = 0;
    inorder(root);
};
function inorder(node) {
    if(node == null) {
        return;
    }
    inorder(node.left);
    nodes.push(node.val);
    inorder(node.right);
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let val = nodes[index];
    index ++;
    return val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return index  < nodes.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
