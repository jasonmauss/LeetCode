// Solution for: https://leetcode.com/problems/root-equals-sum-of-children
/**
 */
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

const checkTree = (root: TreeNode | null): boolean => {

    return root.val === root.left.val + root.right.val;

};







// some test cases
let tn1:TreeNode = new TreeNode(4, null, null);
let tn2:TreeNode = new TreeNode(6, null, null);
let tn3:TreeNode = new TreeNode(10, tn1, tn2);

console.log(checkTree(tn3)); // true

let tn4:TreeNode = new TreeNode(3, null, null);
let tn5:TreeNode = new TreeNode(1, null, null);
let tn6:TreeNode = new TreeNode(5, tn4, tn5);

console.log(checkTree(tn6)); // false