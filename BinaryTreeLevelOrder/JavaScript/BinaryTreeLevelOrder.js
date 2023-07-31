// Solution for: https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 */
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
const levelOrder = (root) => {
    const returnValues = [];
    const getNodeValuesAtLevel = (node, level) => {
        if (!node)
            return;
        if (!returnValues[level])
            returnValues.push([]);
        returnValues[level].push(node.val);
        if (node.left)
            getNodeValuesAtLevel(node.left, level + 1);
        if (node.right)
            getNodeValuesAtLevel(node.right, level + 1);
    };
    getNodeValuesAtLevel(root, 0);
    return returnValues;
};
// some test cases
let rootNode1 = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(levelOrder(rootNode1)); // [[3],[9,20],[15,7]]
let rootNode2 = new TreeNode(1, null, null);
console.log(levelOrder(rootNode2)); // [[1]]
let rootNode3 = null;
console.log(levelOrder(rootNode3)); // []
