// Solution for: https://leetcode.com/problems/balanced-binary-tree/
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var isBalanced = function (root) {
    if (!root)
        return true;
    var leftDepth = getTreeDepth(root.left);
    var rightDepth = getTreeDepth(root.right);
    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};
var getTreeDepth = function (node) {
    if (!node)
        return 0;
    return 1 + Math.max(getTreeDepth(node.right), getTreeDepth(node.left));
};
// some test cases
var tn1 = new TreeNode(15, null, null);
var tn2 = new TreeNode(7, null, null);
var tn3 = new TreeNode(20, tn1, tn2);
var tn4 = new TreeNode(9, null, null);
var tn5 = new TreeNode(3, tn4, tn3);
console.log(isBalanced(tn5)); // true
var tn6 = new TreeNode(1, null, null);
console.log(isBalanced(tn6)); // true
var tn7 = new TreeNode(4, null, null);
var tn8 = new TreeNode(4, null, null);
var tn9 = new TreeNode(3, tn7, tn8);
var tn10 = new TreeNode(3, null, null);
var tn11 = new TreeNode(2, tn9, tn10);
var tn12 = new TreeNode(2, null, null);
var tn13 = new TreeNode(1, tn11, tn12);
console.log(isBalanced(tn13)); // false
//[1,null,2,null,3]
var tn14 = new TreeNode(3, null, null);
var tn15 = new TreeNode(2, null, tn14);
var tn16 = new TreeNode(1, null, tn15);
console.log(isBalanced(tn16)); // false;
//[1,2,2,3,null,null,3,4,null,null,4]
var tn17 = new TreeNode(4, null, null);
var tn18 = new TreeNode(4, null, tn17);
var tn19 = new TreeNode(3, tn18, null);
var tn20 = new TreeNode(3, null, null);
var tn21 = new TreeNode(2, tn19, null);
var tn22 = new TreeNode(2, null, tn20);
var tn23 = new TreeNode(1, tn21, tn22);
console.log(isBalanced(tn23)); // false;
