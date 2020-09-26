/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let output = [];
    // put into array first then string ...

    function inOrder(node) {
        if(node) {
            output.push(node.val);
            inOrder(node.left);
            inOrder(node.right);
        }
        else {
            output.push(null);
        }

    }
    // Do it not recursively to avoid OOM ...

    inOrder(root, 0);
    // Stringify the output array ...
    let outputString = "";
    for(let i = 0; i < output.length; i++) {
        if(i > 0) {
            outputString += "|";
        }
        if(output[i] === null) {
            // falsey
            outputString += "n";
        }
        else {
            outputString += output[i];
        }
    }
    console.log(outputString)
    return outputString;

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // expects a string such as this ...
    // "1|2|3|null|null|4|5"
    // return null;
    const inputArray = data.split("|");
    function inOrder(index) {
        if(inputArray.length === 0) {
            return null;
        }
        const value = inputArray.shift();
        if(value == "n") {
            return null
        };
        const node = new TreeNode(value);
        node.left = inOrder(index + 1)
        node.right = inOrder(index + 2);
        return node;
    }
    if(inputArray.length == 0 || inputArray[0] == "n" || inputArray[0] == "") {
        return null
    }

    return inOrder(0);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
