// Solution for: https://leetcode.com/problems/evaluate-boolean-binary-tree/
/**
 * Definition for a binary tree node.
 **/
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

const evaluateTree = (root: TreeNode | null): boolean => {

    return false;

};







// some test cases
let rootNode:TreeNode = new TreeNode(
    
)
console.log(evaluateTree(rootNode)); //