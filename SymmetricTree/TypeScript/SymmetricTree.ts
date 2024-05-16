// Solution for: https://leetcode.com/problems/symmetric-tree/

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

const isMirroredNode = (leftNode:TreeNode | null, rightNode:TreeNode | null): boolean => {

    if(leftNode === null && rightNode === null) return true;
    if(leftNode === null || rightNode === null) return false;

    return (leftNode.val === rightNode.val) &&
            isMirroredNode(leftNode.left, rightNode.right) &&
            isMirroredNode(leftNode.right, rightNode.left);

};

const isSymmetric = (root: TreeNode | null): boolean => {
    
    return isMirroredNode(root, root);

};

// some test cases

const node1:TreeNode = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3, null, null),
        new TreeNode(4, null, null)
    ),
    new TreeNode(2,
        new TreeNode(4, null, null),
        new TreeNode(3, null, null)
    )
);

console.log(isSymmetric(node1)); // true

const node2:TreeNode = new TreeNode(1,
    new TreeNode(2,
        null,
        new TreeNode(3, null, null)
    ),
    new TreeNode(2,
        null,
        new TreeNode(3, null, null)
    )
);

console.log(isSymmetric(node2)); // false