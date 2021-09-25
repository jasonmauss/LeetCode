// Solution for: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Definition for a binary tree node class.
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

const maxDepth = (root: TreeNode | null): number => {
    return addDepth(root, 0);
};

const addDepth = (node: TreeNode | null, currentDepth: number): number => {
    
    if(node === null) return currentDepth;
    return Math.max(currentDepth, 
                    addDepth(node.left, currentDepth + 1),
                    addDepth(node.right, currentDepth + 1));
};

// some test cases
let tn1:TreeNode = new TreeNode(15, null, null);
let tn2:TreeNode = new TreeNode(7, null, null);
let tn3:TreeNode = new TreeNode(20, tn1, tn2);

let tn4:TreeNode = new TreeNode(9, null, null);
let tn5:TreeNode = new TreeNode(3, tn4, tn3);

console.log(maxDepth(tn5)); // 3