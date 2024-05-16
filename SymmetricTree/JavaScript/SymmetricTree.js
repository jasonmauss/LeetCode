// Solution for: https://leetcode.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var isMirroredNode = function (leftNode, rightNode) {
    if (leftNode === null && rightNode === null)
        return true;
    if (leftNode === null || rightNode === null)
        return false;
    return (leftNode.val === rightNode.val) &&
        isMirroredNode(leftNode.left, rightNode.right) &&
        isMirroredNode(leftNode.right, rightNode.left);
};
var isSymmetric = function (root) {
    return isMirroredNode(root, root);
};
// some test cases
var node1 = new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)), new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)));
console.log(isSymmetric(node1)); // true
var node2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3, null, null)), new TreeNode(2, null, new TreeNode(3, null, null)));
console.log(isSymmetric(node2)); // false
