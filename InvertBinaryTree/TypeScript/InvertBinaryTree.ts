// Solution for: https://leetcode.com/problems/invert-binary-tree/

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

const invertTree = (root: TreeNode | null): TreeNode | null => {

    if(root === null) return null;

    const treeNode:TreeNode = new TreeNode(
        root.val,
        invertTree(root.right),
        invertTree(root.left)
    )

    return treeNode;
};


// some test cases
let tn1:TreeNode = new TreeNode(9, null, null);
let tn2:TreeNode = new TreeNode(6, null, null);
let tn3:TreeNode = new TreeNode(3, null, null);
let tn4:TreeNode = new TreeNode(1, null, null);
let tn5:TreeNode = new TreeNode(7, tn2, tn1);
let tn6:TreeNode = new TreeNode(2, tn4, tn3);
let tn7:TreeNode = new TreeNode(4, tn6, tn5);
console.log(invertTree(tn7)); // 


let tn8:TreeNode = new TreeNode(3, null, null);
let tn9:TreeNode = new TreeNode(1, null, null);
let tn10:TreeNode = new TreeNode(2, tn9, tn8);
console.log(invertTree(tn10)); // 