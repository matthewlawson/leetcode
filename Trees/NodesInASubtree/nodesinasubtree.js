// Add any extra import statements you may need here


// Definition for a Node
export function Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
};

// Add any helper functions you may need here

/**
 *
 * @param {Node} root
 * @param {[number, string][]} queries
 * @param {string} string
 */
export function countOfNodes(root, queries, string) {
    // Write your code here
    const nodeValToCharCountMap = new Map();

    buildLookupMap(root, string, nodeValToCharCountMap);
    // console.log(nodeValToCharCountMap);
    let output = [];
    for(let i = 0; i < queries.length; i++) {
        const [startNode, character] = queries[i];
        output[i] = nodeValToCharCountMap.get(startNode).get(character);
    }

    return output;
    // iterate on results to lookup results from map.
}

function buildLookupMap(node, string, nodeValToCountMap) {
    let charCountMap = new Map();
    charCountMap.set(string[node.val  -1], 1);
    if(node.children) {
        for(let i = 0; i < node.children.length; i ++) {
            const childCharCountMap = buildLookupMap(node.children[i], string, nodeValToCountMap);
            charCountMap = mergeResults(charCountMap, childCharCountMap);
        }
    }
    nodeValToCountMap.set(node.val, charCountMap);
    return charCountMap;
}
/**
 *
 * @param {Map<string, number>} charCountMapOne
 * @param {Map<string, number>} charCountMapTwo
 */
function mergeResults(charCountMapOne, charCountMapTwo){
    charCountMapTwo.forEach((value, key) => {
        if(charCountMapOne.has(key)) {
            charCountMapOne.set(key, value + charCountMapOne.get(key));
        }
        else {
            charCountMapOne.set(key, value);
        }
    })

    return charCountMapOne;
}
