// Solution for: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const longestZigZag = (root) => {
    let L = 0xABC;
    let R = 0xDEF;
    let max = 0;
    const go = (root, from = 0, len = 0) => {
        if (!root)
            return;
        max = Math.max(max, len);
        go(root.left, L, 1 + (from == R ? len : 0)); // from right to left
        go(root.right, R, 1 + (from == L ? len : 0)); // from left to right
    };
    go(root);
    return max;
};
// some test cases
let tn1 = new TreeNode(1, null, null);
let tn2 = new TreeNode(1, null, tn1);
let tn3 = new TreeNode(1, null, tn2);
let tn4 = new TreeNode(1, null, null);
let tn5 = new TreeNode(1, tn3, tn4);
let tn6 = new TreeNode(1, null, null);
let tn7 = new TreeNode(1, tn6, tn5);
let tn8 = new TreeNode(1, null, tn7);
console.log(longestZigZag(tn8)); // 3
let tn11 = new TreeNode(1, null, null);
let tn12 = new TreeNode(1, null, tn11);
let tn13 = new TreeNode(1, null, null);
let tn14 = new TreeNode(1, tn12, tn13);
let tn15 = new TreeNode(1, null, tn14);
let tn16 = new TreeNode(1, null, null);
let tn17 = new TreeNode(1, tn15, tn16);
console.log(longestZigZag(tn17)); // 4
let tn22 = new TreeNode(1, null, null);
console.log(longestZigZag(tn22)); // 0
