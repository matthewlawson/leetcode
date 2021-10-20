// Add any extra import statements you may need here


// Definition for a binary tree node
export function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Add any helper functions you may need here


export function visibleNodes(root) {
    // Write your code here
    let treeHeight = 0;
    dfs(root, 1);
    function dfs(node, height) {
        if (node == null) {
            return;
        }
        treeHeight = Math.max(height, treeHeight);
        dfs(node.left, height + 1);
        dfs(node.right, height + 1);
    }
    return treeHeight;
}
