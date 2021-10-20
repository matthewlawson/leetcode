/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Find split point, we know form properties of BST that we can traverse the tree better,
    if(root == null) {
        return null;
    }
    if(p.val < root.val && q.val < root.val) {
        // LCA must be in left branch
        return lowestCommonAncestor(root.left, p, q);
    }
    else if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p , q)
    }
    else {
        // One either side, this must be it ...
        return root;
    }
};
