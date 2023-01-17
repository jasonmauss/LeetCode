// Solution for: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/


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

const getTargetCopy = (original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null => {

    if(original && cloned && target) {

        if(original.val === target.val) return cloned;

        if(original.left !== null) {
            let leftNode = getTargetCopy(original.left, cloned.left, target);
            if(leftNode !== null) return leftNode;
        }

        if(cloned.right !== null) {
            let rightNode = getTargetCopy(original.right, cloned.right, target);
            if(rightNode !== null) return rightNode;
        }
    }

    return null;
};




// some test cases
let node1 = new TreeNode(19, null, null);
let node2 = new TreeNode(6, null, null);
let node3 = new TreeNode(3, node2, node1);
let node4 = new TreeNode(4, null, null);
let node5 = new TreeNode(7, node4, node3);

let node6 = new TreeNode(19, null, null);
let node7 = new TreeNode(6, null, null);
let node8 = new TreeNode(3, node7, node6);
let node9 = new TreeNode(4, null, null);
let node10 = new TreeNode(7, node9, node8);


console.log(getTargetCopy(node5, node10, node3)); // TreeNode { val: 3, left: TreeNode { val: 6, left: null, right: null }, right: TreeNode { val: 19, left: null, right: null } }