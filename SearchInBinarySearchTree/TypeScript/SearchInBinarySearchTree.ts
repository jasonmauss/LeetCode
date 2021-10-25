// Solution for: https://leetcode.com/problems/search-in-a-binary-search-tree/

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

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {

    if(root === null || root.val === val) return root;

    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);

};

// some test cases
let n1:TreeNode = new TreeNode(1, null, null);
let n2:TreeNode = new TreeNode(3, null, null);
let n3:TreeNode = new TreeNode(2, n1, n2);
let n4:TreeNode = new TreeNode(7, null, null);
let n5:TreeNode = new TreeNode(4, n3, n4);

console.log(searchBST(n5, 2)); // [2,1,3]


let n6:TreeNode = new TreeNode(1, null, null);
let n7:TreeNode = new TreeNode(3, null, null);
let n8:TreeNode = new TreeNode(2, n6, n7);
let n9:TreeNode = new TreeNode(7, null, null);
let n10:TreeNode = new TreeNode(4, n8, n9);

console.log(searchBST(n10, 5)); // []