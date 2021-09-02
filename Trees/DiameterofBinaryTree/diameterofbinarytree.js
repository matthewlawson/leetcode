/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 let diameter = 0;
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var diameterOfBinaryTree = function(root) {
     diameter = 0;
     dfs(root);
     return diameter;
 };

 function dfs(node) {
     if(node == null) {
         return 0;
     }

     let leftLength = dfs(node.left);
     let rightLength = dfs(node.right);

     diameter = Math.max(diameter, leftLength + rightLength);
     const height = Math.max(leftLength, rightLength) + 1
     return height;
 }
