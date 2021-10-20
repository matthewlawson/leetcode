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
function str2tree(s) {
    return _str2treeInternal(s, 0)[0]
};

/**
 *
 * @param {string} s
 * @param {number} index
 */
function _getNumber(s, index) {

    let isNegative = false;

    // # A negative number
    if (s[index] == '-') {
        isNegative = true
        index = index + 1
    }
    let number = 0
    while (index < s.length && Number.isInteger(s[index])) {
        number = number * 10 + int(s[index])
        index += 1
    }
    if(!isNegative) {
        return [number, index];
    }
    else {
        return [-number, index];
    }
    // return number if not is_negative else -number, index
}

/**
 *
 * @param {string} s
 * @param {number} index
 */
function _str2treeInternal(s, index) {
    if (index == s.length) {
        return { node: null, index };
    }
    // # Start of the tree will always contain a number representing
    // # the root of the tree. So we calculate that first.
    const numberResult = _getNumber(s, index)
    index = numberResult[1]
    let node = TreeNode(numberResult[0])

    // # Next, if there is any data left, we check for the first subtree
    // # which according to the problem statement will always be the left child.
    if (index < s.length && s[index] == "(") {
        const nextInterval = _str2treeInternal(s, index + 1);
        node.left = nextInterval.node;
        index = nextInterval.index;
    }
    // if index < len(s) and s[index] == '(':
    //     node.left, index = self._str2treeInternal(s, index + 1)

    // # Indicates a right child
    if (node.left && index < s.length && s[index] == "(") {
        const nextInterval = _str2treeInternal(s, index + 1);
        node.right = nextInterval.node;
        index = nextInterval.index;
    }
    // if node.left and index < len(s) and s[index] == '(':
    //     node.right, index = self._str2treeInternal(s, index + 1)
    if (index < s.length && s[index] == ")") {
        return { node, index: index + 1 };
    }
    else {
        return { index };
    }
    // return node, index + 1 if index < len(s) and s[index] == ')' else index
}
