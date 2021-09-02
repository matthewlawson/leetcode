/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
let first = null;
let last = null;
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (root == null) {
        return null;
    }
    find(root);
    // Close the loop ...
    last.right = first;
    first.left = last;
    return first;
};

/**
 * @param {Node} node
 * @return {Node}
 */
function find(node) {
    if (node == null) {
        return;
    }
    find(node.left);

    if (first == null) {
        first = node;
    }
    if (last != null) {
        node.left = last;
        last.right = node;
    }
    last = node;
    find(node.right);

}
