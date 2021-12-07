// Solution for: https://leetcode.com/problems/invert-binary-tree/
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var invertTree = function (root) {
    if (root === null)
        return null;
    var treeNode = new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    return treeNode;
};
// some test cases
var tn1 = new TreeNode(9, null, null);
var tn2 = new TreeNode(6, null, null);
var tn3 = new TreeNode(3, null, null);
var tn4 = new TreeNode(1, null, null);
var tn5 = new TreeNode(7, tn2, tn1);
var tn6 = new TreeNode(2, tn4, tn3);
var tn7 = new TreeNode(4, tn6, tn5);
console.log(invertTree(tn7)); // 
var tn8 = new TreeNode(3, null, null);
var tn9 = new TreeNode(1, null, null);
var tn10 = new TreeNode(2, tn9, tn8);
console.log(invertTree(tn10)); // 
