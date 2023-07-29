// Solution for: https://leetcode.com/problems/binary-tree-level-order-traversal/
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


const levelOrder = (root: TreeNode | null): number[][] => {

    return [[]];

};



// some test cases
let rootNode1:TreeNode = new TreeNode(3,
    new TreeNode(9, null, null),
    new TreeNode(20,
        new TreeNode(15, null, null),
        new TreeNode(7, null, null)
    )
);
console.log(levelOrder(rootNode1)); // [[3],[9,20],[15,7]]

let rootNode2:TreeNode = new TreeNode(1, null, null);
console.log(levelOrder(rootNode2)); // [[1]]

let rootNode3:TreeNode = new TreeNode();
console.log(levelOrder(rootNode3)); // []