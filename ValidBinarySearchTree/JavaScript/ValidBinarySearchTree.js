// Solution for: https://leetcode.com/problems/validate-binary-search-tree/
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
const isValidBST = (root, minPossibleValue = -Infinity, maxPossibleValue = Infinity) => {
    // if the root is null, then is valid BST
    if (!root)
        return true;
    // check if current node value is between the min/max values
    return !(root.val <= minPossibleValue || root.val >= maxPossibleValue) &&
        // left sub-node has a max value of current node value
        isValidBST(root.left, minPossibleValue, root.val) &&
        // right sub-node has a min value of current node value
        isValidBST(root.right, root.val, maxPossibleValue);
};
// some test cases
const rootNode = new TreeNode(2, new TreeNode(1, null), new TreeNode(3, null));
console.log(isValidBST(rootNode)); // true
const rootNode2 = new TreeNode(5, new TreeNode(1, null), new TreeNode(4, new TreeNode(3, null), new TreeNode(6, null)));
console.log(isValidBST(rootNode2)); // false
