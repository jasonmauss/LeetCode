// Solution for: https://leetcode.com/problems/balanced-binary-tree/

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

const isBalanced = (root: TreeNode | null): boolean => {

    if(!root) return true;

    let leftDepth:number = getTreeDepth(root.left);
    let rightDepth:number = getTreeDepth(root.right);

    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};

const getTreeDepth = (node: TreeNode | null): number => {
    
    if(!node) return 0;

    return 1 + Math.max(getTreeDepth(node.right), getTreeDepth(node.left));

}


// some test cases
let tn1:TreeNode = new TreeNode(15, null, null);
let tn2:TreeNode = new TreeNode(7, null, null);
let tn3:TreeNode = new TreeNode(20, tn1, tn2);

let tn4:TreeNode = new TreeNode(9, null, null);
let tn5:TreeNode = new TreeNode(3, tn4, tn3);

console.log(isBalanced(tn5)); // true

let tn6:TreeNode = new TreeNode(1, null, null);
console.log(isBalanced(tn6)); // true

let tn7:TreeNode = new TreeNode(4, null, null);
let tn8:TreeNode = new TreeNode(4, null, null);
let tn9:TreeNode = new TreeNode(3, tn7, tn8);

let tn10:TreeNode = new TreeNode(3, null, null);
let tn11:TreeNode = new TreeNode(2, tn9, tn10);
let tn12:TreeNode = new TreeNode(2, null, null);
let tn13:TreeNode = new TreeNode(1, tn11, tn12);

console.log(isBalanced(tn13)); // false

//[1,null,2,null,3]
let tn14:TreeNode = new TreeNode(3, null, null);
let tn15:TreeNode = new TreeNode(2, null, tn14);
let tn16:TreeNode = new TreeNode(1, null, tn15);

console.log(isBalanced(tn16)); // false;

//[1,2,2,3,null,null,3,4,null,null,4]
let tn17:TreeNode = new TreeNode(4, null, null);
let tn18:TreeNode = new TreeNode(4, null, tn17);
let tn19:TreeNode = new TreeNode(3, tn18, null);
let tn20:TreeNode = new TreeNode(3, null, null);
let tn21:TreeNode = new TreeNode(2, tn19, null);
let tn22:TreeNode = new TreeNode(2, null, tn20);
let tn23:TreeNode = new TreeNode(1, tn21, tn22);
console.log(isBalanced(tn23)); // false;