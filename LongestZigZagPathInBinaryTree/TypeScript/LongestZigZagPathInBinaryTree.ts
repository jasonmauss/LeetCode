// Solution for: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const longestZigZag = (root: TreeNode | null): number => {

    let L = 0xABC;
    let R = 0xDEF;
    let max:number = 0;

    const go = (root, from = 0, len = 0) => {
        if (!root) return;
        max = Math.max(max, len);
        go(root.left,  L, 1 + (from == R ? len : 0)); // from right to left
        go(root.right, R, 1 + (from == L ? len : 0)); // from left to right
    };

    go(root);

    return max;

};



// some test cases
let tn1:TreeNode = new TreeNode(1, null, null);
let tn2:TreeNode = new TreeNode(1, null, tn1);
let tn3:TreeNode = new TreeNode(1, null, tn2);
let tn4:TreeNode = new TreeNode(1, null, null);
let tn5:TreeNode = new TreeNode(1, tn3, tn4);
let tn6:TreeNode = new TreeNode(1, null, null);
let tn7:TreeNode = new TreeNode(1, tn6, tn5);
let tn8:TreeNode = new TreeNode(1, null, tn7);

console.log(longestZigZag(tn8)); // 3
let tn11:TreeNode = new TreeNode(1, null, null);
let tn12:TreeNode = new TreeNode(1, null, tn11);
let tn13:TreeNode = new TreeNode(1, null, null);
let tn14:TreeNode = new TreeNode(1, tn12, tn13);
let tn15:TreeNode = new TreeNode(1, null, tn14);
let tn16:TreeNode = new TreeNode(1, null, null);
let tn17:TreeNode = new TreeNode(1, tn15, tn16);

console.log(longestZigZag(tn17)); // 4


let tn22:TreeNode = new TreeNode(1, null, null);
console.log(longestZigZag(tn22)); // 0