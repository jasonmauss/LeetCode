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
    var queue = [root];
    while (queue.length) {
        var size = queue.length;
        var foundX = false;
        var foundY = false;
        // iterate through one level
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            // check if children are x and y
            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val === y) ||
                    (node.left.val === y && node.right.val === x))
                    return false;
            }
            // find x and y at the same level
            if (node.val === x)
                foundX = true;
            if (node.val === y)
                foundY = true;
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
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
