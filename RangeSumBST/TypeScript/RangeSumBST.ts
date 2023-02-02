// Solution for: https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 */

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

    return 0;

};






// some test cases
let tn1:TreeNode = new TreeNode(3, null, null);
let tn2:TreeNode = new TreeNode(7, null, null);
let tn3:TreeNode = new TreeNode(5, tn1, tn2);
let tn4:TreeNode = new TreeNode(18, null, null);
let tn5:TreeNode = new TreeNode(15, null, tn4);
let tn6:TreeNode = new TreeNode(10, tn3, tn5);

console.log(rangeSumBST(tn6, 7, 15)); // 32


let tn7:TreeNode = new TreeNode(1, null, null);
let tn8:TreeNode = new TreeNode(6, null, null);
let tn9:TreeNode = new TreeNode(13, null, null);
let tn10:TreeNode = new TreeNode(18, null, null);
let tn11:TreeNode = new TreeNode(3, tn7, null);
let tn12:TreeNode = new TreeNode(7, tn8, null);
let tn13:TreeNode = new TreeNode(15, tn9, tn10);
let tn14:TreeNode = new TreeNode(5, tn11, tn12);
let tn15:TreeNode = new TreeNode(10, tn14, tn13);

console.log(rangeSumBST(tn15, 6, 10)); // 23

