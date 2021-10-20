/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 let answer = null;
 /**
  * @param {TreeNode} root
  * @param {TreeNode} p
  * @param {TreeNode} q
  * @return {TreeNode}
  */
 let answer;
 var lowestCommonAncestor = function(root, p, q) {
    answer = null;
    dfs(root, p, q);
    return answer;
 };

 function dfs(node, p, q) {

     if (node == null) {
         return false;
     }

     const isInLeft = dfs(node.left, p, q);
     const isInRight = dfs(node.right, p, q);
     const isSelf = node == p || node == q;

     if(isInLeft && isInRight) {
         answer = node;
         return true;
     }
     if(isInLeft && isSelf) {
         answer = node;
         return true;
     }
     if(isInRight && isSelf) {
         answer = node;
         return true;
     }
     return false;
 }
