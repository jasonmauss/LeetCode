// Solution for: https://leetcode.com/problems/path-sum


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

const hasPathSum = (root: TreeNode | null, targetSum: number, currentSum:number = 0): boolean => {
    
    if(!root) return false;

    currentSum += root.val;

    if(!root.left && !root.right) {
        return currentSum === targetSum;
    }

    return hasPathSum(root.left, targetSum, currentSum) || hasPathSum(root.right, targetSum, currentSum);

};



const rootNode1 = 
new TreeNode(5,
    new TreeNode(4,
        new TreeNode(11,
            new TreeNode(7,
                null, null
            ),
            new TreeNode(2,
                null, null
            )
        ), null
    ),
    new TreeNode(8,
        new TreeNode(13,
            null, null
        ),
        new TreeNode(4, 
            null,
            new TreeNode(1,
                null, null
            )
        )
    )
);

// some test cases
console.log(hasPathSum(rootNode1, 22)); // true

const rootNode2 =
new TreeNode(1,
    new TreeNode(2,
        null, null
    ),
    new TreeNode(3,
        null, null
    )
);

console.log(hasPathSum(rootNode2, 5)); // false