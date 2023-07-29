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
    return [[]];
};
// some test cases
let rootNode1 = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(levelOrder(rootNode1)); // [[3],[9,20],[15,7]]
let rootNode2 = new TreeNode(1, null, null);
console.log(levelOrder(rootNode2)); // [[1]]
let rootNode3 = new TreeNode();
console.log(levelOrder(rootNode3)); // []
