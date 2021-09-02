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
 var lowestCommonAncestor = function(root, p, q) {
     answer = null
     dfs(root, p, q)
     return answer;
 };

 function dfs(node, p, q) {
     if(node == null) {
         return false;
     }
     const inLeft = dfs(node.left, p, q);
     const inRight = dfs(node.right, p, q);
     const isSelf = node == p || node == q;


     if((inLeft && inRight) || (inLeft && isSelf) || (inRight && isSelf)) {
         answer = node;
     }

     return inLeft || inRight || isSelf;

 }
