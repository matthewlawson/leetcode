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

 let pFound = false;
 let qFound = false
 var lowestCommonAncestor = function(root, p, q) {

     pFound = false;
     qFound = false
     let answer = dfs(root, p, q);
     return pFound && qFound ? answer : null;
 };

  function dfs(node, p, q) {
      if (node == null) {
          return node;
      }

      const isInLeft = dfs(node.left, p, q);
      const isInRight = dfs(node.right, p, q);
      // const isSelf = node == p || node == q;
      if(node == p) {
          pFound = true;
          return node;
      }
      if(node == q) {
          qFound = true;
          return node;
      }

      if(isInLeft == null) {
          return isInRight;
      }
      else if(isInRight == null) {
          return isInLeft

      }
      else {
          return node;
      }
  }
