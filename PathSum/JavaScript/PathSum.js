// Solution for: https://leetcode.com/problems/path-sum
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var hasPathSum = function (root, targetSum) {
    return false;
};
var rootNode1 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7, null, null), new TreeNode(2, null, null)), null), new TreeNode(8, new TreeNode(13, null, null), new TreeNode(4, null, new TreeNode(1, null, null))));
// some test cases
console.log(hasPathSum(rootNode1, 22)); // true
var rootNode2 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
console.log(hasPathSum(rootNode2, 5)); // false
