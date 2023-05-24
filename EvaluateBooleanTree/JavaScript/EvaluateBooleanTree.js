// Solution for: https://leetcode.com/problems/evaluate-boolean-binary-tree/
/**
 * Definition for a binary tree node.
 **/
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
const evaluateTree = (root) => {
    // if the node is a leaf node and doesn't have a
    // left or right node, just return the value of the node
    if (!root.left && !root.right) {
        return Boolean(root.val);
    }
    let boolLeft;
    let boolRight;
    if (root.left.val < 2) {
        boolLeft = Boolean(root.left.val);
    }
    else {
        boolLeft = evaluateTree(root.left);
    }
    if (root.right.val < 2) {
        boolRight = Boolean(root.right.val);
    }
    else {
        boolRight = evaluateTree(root.right);
    }
    if (root.val === 2) { // OR
        if (boolLeft || boolRight) {
            root.val = 1;
            return true;
        }
        else {
            root.val = 0;
            return false;
        }
    }
    if (root.val === 3) { // AND
        if (boolLeft && boolRight) {
            root.val = 1;
            return true;
        }
        else {
            root.val = 0;
            return false;
        }
    }
    return evaluateTree(root);
};
// some test cases
let rootNode = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, new TreeNode(0, null, null), new TreeNode(1, null, null)));
console.log(evaluateTree(rootNode)); // true
let rootNode2 = new TreeNode(0, null, null);
console.log(evaluateTree(rootNode2)); // false
let rootNode3 = new TreeNode(3, new TreeNode(3, new TreeNode(0, null, null), new TreeNode(0, null, null)), new TreeNode(2, new TreeNode(3, new TreeNode(1, null, null), new TreeNode(3, new TreeNode(2, new TreeNode(1, null, null), new TreeNode(1, null, null)), new TreeNode(1, null, null))), new TreeNode(2, new TreeNode(1, null, null), new TreeNode(1, null, null))));
console.log(evaluateTree(rootNode3));
