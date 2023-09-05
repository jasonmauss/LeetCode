// Solution for: https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 */
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
function isSameTree(p, q) {
    return false;
}
;
// test 1
let node1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
let node2 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
console.log(isSameTree(node1, node2)); // true
// test 2
node1 = new TreeNode(1, new TreeNode(2, null, null), null);
node2 = new TreeNode(1, null, new TreeNode(2, null, null));
// some test cases
console.log(isSameTree(node1, node2)); // false
// test 3
node1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null));
node2 = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null));
// some test cases
console.log(isSameTree(node1, node2)); // false
