// Solution for: https://leetcode.com/problems/increasing-order-search-tree/

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

const increasingBST = (root: TreeNode | null): TreeNode | null => {

    return null;

};









// some test cases
let rootNode:TreeNode = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2,
            new TreeNode(1, null, null),
            null
        ),
        new TreeNode(4, null, null)
    ),
    new TreeNode(6,
        null,
        new TreeNode(8,
            new TreeNode(7, null, null),
            new TreeNode(9, null, null)
        )
    )
)

console.log(increasingBST(rootNode)); // 