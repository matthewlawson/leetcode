/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 export var lowestCommonAncestor = function(p, q) {
    const pAncestors = getAncestors(p, new Set());
    // console.log(pAncestors);
    return findCommon(q, pAncestors);
};

function findCommon(node, pAncestors) {
    if(pAncestors.has(node)) {
        return node;
    }
    return findCommon(node.parent, pAncestors);
}
function getAncestors(node, ancestors) {
    if(node == null) {
        return ancestors;
    }
    ancestors.add(node);
    return getAncestors(node.parent, ancestors);
}
