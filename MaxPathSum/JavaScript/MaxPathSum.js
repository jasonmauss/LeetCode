// Solution for: https://leetcode.com/problems/binary-tree-maximum-path-sum/
/**
 * Definition for a binary tree node.
 * */
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
const maxPathSum = (root) => {
    return 0;
};
// some test cases
let rootNode = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
console.log(maxPathSum(rootNode)); // 6
let rootNode1 = new TreeNode(-10, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(maxPathSum(rootNode1)); // 42
