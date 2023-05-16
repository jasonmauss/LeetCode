// Solution for: https://leetcode.com/problems/merge-two-binary-trees/
/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
const mergeTrees = (root1, root2) => {
    // if either node is null, just return 
    // the other since it's the only value
    if (root1 === null)
        return root2;
    if (root2 === null)
        return root1;
    // if neither are null, return the sum of
    // both values
    root1.val += root2.val;
    // now also deal with the descendant nodes
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    // return root1 since that's what we added root2 to.
    return root1;
};
let t1 = new TreeNode(1, new TreeNode(3, new TreeNode(5, null, null), null), new TreeNode(2, null, null));
let t2 = new TreeNode(2, new TreeNode(1, null, new TreeNode(4, null, null)), new TreeNode(3, null, new TreeNode(7, null, null)));
// some test cases
console.log(mergeTrees(t1, t2)); // 
