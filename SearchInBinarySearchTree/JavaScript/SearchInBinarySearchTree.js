// Solution for: https://leetcode.com/problems/search-in-a-binary-search-tree/
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var searchBST = function (root, val) {
    if (root === null || root.val === val)
        return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};
// some test cases
var n1 = new TreeNode(1, null, null);
var n2 = new TreeNode(3, null, null);
var n3 = new TreeNode(2, n1, n2);
var n4 = new TreeNode(7, null, null);
var n5 = new TreeNode(4, n3, n4);
console.log(searchBST(n5, 2)); // [2,1,3]
var n6 = new TreeNode(1, null, null);
var n7 = new TreeNode(3, null, null);
var n8 = new TreeNode(2, n6, n7);
var n9 = new TreeNode(7, null, null);
var n10 = new TreeNode(4, n8, n9);
console.log(searchBST(n10, 5)); // []
