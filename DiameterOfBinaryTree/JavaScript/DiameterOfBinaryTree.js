// Solution for: https://leetcode.com/problems/diameter-of-binary-tree/
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var diameterOfBinaryTree = function (root) {
    var diameter = 0;
    // recurse through the nodes, adding 1 to whichever
    // side's edge is "deeper", left or right (or overall diameter)
    var depthFirstSearch = function (node) {
        if (node === null)
            return 0;
        var left = depthFirstSearch(node.left);
        var right = depthFirstSearch(node.right);
        // update the diameter for each node
        diameter = Math.max(diameter, left + right);
        // increment the largest edge value
        return 1 + Math.max(left, right);
    };
    depthFirstSearch(root);
    return diameter;
};
// some test cases
var t1 = new TreeNode(5, null, null);
var t2 = new TreeNode(4, null, null);
var t3 = new TreeNode(2, t2, t1);
var t4 = new TreeNode(3, null, null);
var t5 = new TreeNode(1, t3, t4);
console.log(diameterOfBinaryTree(t5)); // 3
var t6 = new TreeNode(2, null, null);
var t7 = new TreeNode(1, t6, null);
console.log(diameterOfBinaryTree(t7)); // 1
