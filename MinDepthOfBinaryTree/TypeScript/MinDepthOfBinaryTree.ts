// Solution for: https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Definition for a binary tree node.
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

 function minDepth(root: TreeNode | null): number {

    return 0;
};

// some test cases
let tn1:TreeNode = new TreeNode(15, null, null);
let tn2:TreeNode = new TreeNode(7, null, null);
let tn3:TreeNode = new TreeNode(20, tn1, tn2);
let tn4:TreeNode = new TreeNode(9, null, null);
let tn5:TreeNode = new TreeNode(3, tn4, tn3);

console.log(minDepth(tn5)); // 2


let tn6:TreeNode = new TreeNode(6, null, null);
let tn7:TreeNode = new TreeNode(5, null, tn6);
let tn8:TreeNode = new TreeNode(4, null, tn7);
let tn9:TreeNode = new TreeNode(3, null, tn8);
let tn10:TreeNode = new TreeNode(2, null, tn9);

console.log(minDepth(tn10)); // 5