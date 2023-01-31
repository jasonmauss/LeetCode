// Solution for: https://leetcode.com/problems/root-equals-sum-of-children
/**
 */
// Definition for a binary tree node.
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
const checkTree = (root) => {
    return false;
};
// some test cases
let tn1 = new TreeNode(4, null, null);
let tn2 = new TreeNode(6, null, null);
let tn3 = new TreeNode(10, tn1, tn2);
console.log(checkTree(tn3)); // true
let tn4 = new TreeNode(3, null, null);
let tn5 = new TreeNode(1, null, null);
let tn6 = new TreeNode(5, tn4, tn5);
console.log(checkTree(tn3)); // false
