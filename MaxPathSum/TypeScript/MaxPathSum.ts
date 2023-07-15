// Solution for: https://leetcode.com/problems/binary-tree-maximum-path-sum/
/**
 * Definition for a binary tree node.
 * */
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


const maxPathSum = (root: TreeNode | null): number => {

    return 0;

};




// some test cases
let rootNode:TreeNode = new TreeNode(1,
    new TreeNode(2,
        null, null
    ),
    new TreeNode(3,
        null, null
    )
);
console.log(maxPathSum(rootNode)); // 6


let rootNode1:TreeNode = new TreeNode(-10,
    new TreeNode(9,
        null, null
    ),
    new TreeNode(20,
        new TreeNode(15,
            null, null
        ),
        new TreeNode(7,
            null, null
        )
    )
);
console.log(maxPathSum(rootNode1)); // 42