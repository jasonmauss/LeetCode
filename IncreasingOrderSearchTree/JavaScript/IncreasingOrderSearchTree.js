// Solution for: https://leetcode.com/problems/increasing-order-search-tree/
// Definition for a binary tree node.
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const increasingBST = (root) => {
    const nodeValues = [];
    const getNodeValues = (rootNode) => {
        let returnValues = [];
        if (rootNode) {
            returnValues.push(rootNode.val);
            returnValues.push(...getNodeValues(rootNode.left));
            returnValues.push(...getNodeValues(rootNode.right));
        }
        return returnValues;
    };
    nodeValues.push(...getNodeValues(root));
    nodeValues.sort((a, b) => a - b);
    let childNode = new TreeNode(nodeValues[nodeValues.length - 1]);
    let parentNode;
    for (let i = nodeValues.length - 2; i >= 0; i--) {
        parentNode = new TreeNode(nodeValues[i], null, childNode);
        childNode = parentNode;
    }
    return parentNode;
};
// some test cases
let rootNode = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1, null, null), null), new TreeNode(4, null, null)), new TreeNode(6, null, new TreeNode(8, new TreeNode(7, null, null), new TreeNode(9, null, null))));
console.log(increasingBST(rootNode)); // 
