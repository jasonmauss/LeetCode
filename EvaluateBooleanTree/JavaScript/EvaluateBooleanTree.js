// Solution for: https://leetcode.com/problems/evaluate-boolean-binary-tree/
/**
 * Definition for a binary tree node.
 **/
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
const evaluateTree = (root) => {
    return false;
};
// some test cases
let rootNode = new TreeNode();
console.log(evaluateTree(rootNode)); //
