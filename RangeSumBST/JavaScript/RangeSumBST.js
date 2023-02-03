// Solution for: https://leetcode.com/problems/range-sum-of-bst/
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
const rangeSumBST = (root, low, high) => {
    if (!root)
        return 0;
    let returnVal = 0;
    if (root && (root.val >= low && root.val <= high)) {
        returnVal += root.val;
    }
    returnVal += rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    return returnVal;
};
// some test cases
let tn1 = new TreeNode(3, null, null);
let tn2 = new TreeNode(7, null, null);
let tn3 = new TreeNode(5, tn1, tn2);
let tn4 = new TreeNode(18, null, null);
let tn5 = new TreeNode(15, null, tn4);
let tn6 = new TreeNode(10, tn3, tn5);
console.log(rangeSumBST(tn6, 7, 15)); // 32
let tn7 = new TreeNode(1, null, null);
let tn8 = new TreeNode(6, null, null);
let tn9 = new TreeNode(13, null, null);
let tn10 = new TreeNode(18, null, null);
let tn11 = new TreeNode(3, tn7, null);
let tn12 = new TreeNode(7, tn8, null);
let tn13 = new TreeNode(15, tn9, tn10);
let tn14 = new TreeNode(5, tn11, tn12);
let tn15 = new TreeNode(10, tn14, tn13);
console.log(rangeSumBST(tn15, 6, 10)); // 23
