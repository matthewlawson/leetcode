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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 let total = 0;
 var rangeSumBST = function(root, low, high) {
     total = 0;
     traverse(root, low, high)
     return total;
 };

 function traverse(node, low, high) {
     if(!node) {
         return;
     }
     if(low < node.val) {
         traverse(node.left, low, high);
     }
     if(high > node.val) {

         traverse(node.right, low, high);
     }


     if(node.val <= high && node.val >= low) {
         total += node.val;
     }
     return ;
 }
