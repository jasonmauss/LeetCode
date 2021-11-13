// Solution for: https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function minDepth(root) {
    return 0;
}
;
// some test cases
var tn1 = new TreeNode(15, null, null);
var tn2 = new TreeNode(7, null, null);
var tn3 = new TreeNode(20, tn1, tn2);
var tn4 = new TreeNode(9, null, null);
var tn5 = new TreeNode(3, tn4, tn3);
console.log(minDepth(tn5)); // 2
var tn6 = new TreeNode(6, null, null);
var tn7 = new TreeNode(5, null, tn6);
var tn8 = new TreeNode(4, null, tn7);
var tn9 = new TreeNode(3, null, tn8);
var tn10 = new TreeNode(2, null, tn9);
console.log(minDepth(tn10)); // 5
