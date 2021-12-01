// Solution for: https://leetcode.com/problems/cousins-in-binary-tree/
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var isCousins = function (root, x, y) {
    var tree = [root];
    while (tree.length) {
        var length_1 = tree.length;
        var foundX = false;
        var foundY = false;
        // check the first level
        for (var i = 0; i < length_1; i++) {
            var curNode = tree.shift();
            // check if the two nodes children are x and y
            // if they are, they're not cousins so return false
            if (curNode.left && curNode.right) {
                if ((curNode.left.val === x && curNode.right.val === y) ||
                    (curNode.left.val === y && curNode.right.val === x))
                    return false;
            }
            // find x and y at the same level
            if (curNode.val === x)
                foundX = true;
            if (curNode.val === y)
                foundY = true;
            if (curNode.left)
                tree.push(curNode.left);
            if (curNode.right)
                tree.push(curNode.right);
        }
        if (foundX && foundY)
            return true;
    }
    return false;
};
// some test cases
var t1 = new TreeNode(4, null, null);
var t2 = new TreeNode(3, null, null);
var t3 = new TreeNode(2, t1, null);
var t4 = new TreeNode(1, t3, t2);
console.log(isCousins(t4, 4, 3)); // false
var t5 = new TreeNode(4, null, null);
var t6 = new TreeNode(5, null, null);
var t7 = new TreeNode(2, null, t5);
var t8 = new TreeNode(3, null, t6);
var t9 = new TreeNode(1, t7, t8);
console.log(isCousins(t9, 5, 4)); // true
var t10 = new TreeNode(4, null, null);
var t11 = new TreeNode(2, null, t10);
var t12 = new TreeNode(3, null, null);
var t13 = new TreeNode(1, t11, t12);
console.log(isCousins(t13, 2, 3)); // false
