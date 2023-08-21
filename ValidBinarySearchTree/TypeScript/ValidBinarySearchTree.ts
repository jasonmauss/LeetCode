// Solution for: https://leetcode.com/problems/validate-binary-search-tree/
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

const isValidBST = (root: TreeNode | null): boolean => {

    return false;

};



// some test cases
const rootNode:TreeNode = new TreeNode(2,
    new TreeNode(1, null),
    new TreeNode(3, null)
)

console.log(isValidBST(rootNode)); // true