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
 * @return {number[][]}
 */
 let rowColTracking = {};
 var verticalOrder = function (root) {

     rowColTracking = {};
     let row = 0;
     let col = 0;
     dfs(root, col, row);
     console.log(rowColTracking)
     let output = [];
     // Traverse DS in key order
     let colOrder = Object.keys(rowColTracking).sort((a, b) => { return Number(a) - Number(b) });

     for(let i = 0; i < colOrder.length; i++) {
         const rowValsAtPos = rowColTracking[colOrder[i]];
         // Not sure if need to sort this row order...
         let rowOrder = Object.keys(rowValsAtPos);
         output[i] = []
         for(let j = 0; j < rowOrder.length; j++) {
            output[i] = [...output[i], ...rowValsAtPos[rowOrder[j]]]
         }
        //  output[i] = rowOutput;
     }
     return output
 };

 function dfs(node, col, row) {
     if (node == null) {
         return;
     }
     if (!rowColTracking[col]) {
         rowColTracking[col] = {};
     }
     if (!rowColTracking[col][row]) {
         rowColTracking[col][row] = [];
     }
     rowColTracking[col][row].push(node.val);
     dfs(node.left, col - 1, row + 1);
     dfs(node.right, col + 1, row + 1);

 }
