// Solution for: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Definition for a binary tree node class.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var maxDepth = function (root) {
    return addDepth(root, 0);
};
var addDepth = function (node, currentDepth) {
    if (!node)
        return currentDepth;
    return Math.max(currentDepth, addDepth(node.left, currentDepth + 1), addDepth(node.right, currentDepth + 1));
};
// some test cases
var tn1 = new TreeNode(15, null, null);
var tn2 = new TreeNode(7, null, null);
var tn3 = new TreeNode(20, tn1, tn2);
var tn4 = new TreeNode(9, null, null);
var tn5 = new TreeNode(3, tn4, tn3);
console.log(maxDepth(tn5)); // 3
