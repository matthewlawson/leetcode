/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
 var str2tree = function(s) {
    if(s == "") {
        return null
    }
    // const tree = parseNodes(s)
    const head = new TreeNode();
    dfs(head, s);
    // console.log(tree, parseNodes(tree.left), parseNodes(tree.right));
    return head;
};

function dfs(node, string) {

    const parsedNodes = parseNodes(string);
    if(parsedNodes.value) {
        node.val = parsedNodes.value;
    }
    if(parsedNodes.left) {
        node.left = new TreeNode()
        dfs(node.left, parsedNodes.left);

    }
    if(parsedNodes.right) {
        node.right = new TreeNode();
        dfs(node.right, parsedNodes.right);
    }
}
/**
 *
 * @param {string} string
 * @returns
 */
function parseNodes(string) {
    let leftCount = 0;
    let rightCount = 0;
    let firstOpen = 0;
    let endPosition = 0;
    let value = '';
    if(string.indexOf("(") === -1) {
        // Just a single value ...
        return {value: string};
    }
    while(string[firstOpen]!= "(") {
        value += string[firstOpen];
        firstOpen++;
    }

    while(endPosition <= string.length ) {
        if(leftCount > 0 && rightCount > 0 && leftCount - rightCount == 0) {
            break;
        }
        if(string[endPosition] == "(") {
            leftCount++;
        }
        if(string[endPosition] == ")") {
            rightCount++;
        }
        // console.log(leftCount - rightCount);
        endPosition++;
    }
    const leftNode = string.substring(firstOpen + 1, endPosition - 1);
    leftCount = 0;
    rightCount = 0;
    const rightStartPosition = endPosition ;
    while(endPosition <= string.length ) {
        if(leftCount > 0 && rightCount > 0 && leftCount - rightCount == 0) {
            break;
        }
        if(string[endPosition] == "(") {
            leftCount++;
        }
        if(string[endPosition] == ")") {
            rightCount++;
        }
        // console.log(leftCount - rightCount);
        endPosition++;
    }
    const rightNode = string.substring(rightStartPosition + 1, endPosition - 1);
    return {
        value,
        left: leftNode,
        right: rightNode
    }
}
