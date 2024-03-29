// Solution for: https://leetcode.com/problems/same-tree/
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


const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {

    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};


// test 1
let node1:TreeNode = new TreeNode(1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
);

let node2:TreeNode = new TreeNode(1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
);

console.log(isSameTree(node1, node2)); // true

// test 2
node1 = new TreeNode(1,
    new TreeNode(2, null, null),
    null
);

node2 = new TreeNode(1,
    null,
    new TreeNode(2, null, null)
);

// some test cases
console.log(isSameTree(node1, node2)); // false

// test 3
node1 = new TreeNode(1,
    new TreeNode(2, null, null),
    new TreeNode(1, null, null)
);

node2 = new TreeNode(1,
    new TreeNode(1, null, null),
    new TreeNode(2, null, null)
);

// some test cases
console.log(isSameTree(node1, node2)); // false