// Solution for: https://leetcode.com/problems/diameter-of-binary-tree/

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

 const diameterOfBinaryTree = (root: TreeNode | null): number => {

    let diameter = 0;

    // recurse through the nodes, adding 1 to whichever
    // side's edge is "deeper", left or right (or overall diameter)
    const depthFirstSearch = (node: TreeNode) => {

        if (node === null) return 0;
        
        const left = depthFirstSearch(node.left);
        const right = depthFirstSearch(node.right);
        
        // update the diameter for each node
        diameter = Math.max(diameter, left + right);

        // increment the largest edge value
        return 1 + Math.max(left, right);
    }

    depthFirstSearch(root);
    
    return diameter;
    
};


// some test cases
let t1:TreeNode = new TreeNode(5, null, null);
let t2:TreeNode = new TreeNode(4, null, null);
let t3:TreeNode = new TreeNode(2, t2, t1);

let t4:TreeNode = new TreeNode(3, null, null);
let t5:TreeNode = new TreeNode(1, t3, t4);
console.log(diameterOfBinaryTree(t5)); // 3

let t6:TreeNode = new TreeNode(2, null, null);
let t7:TreeNode = new TreeNode(1, t6, null);
console.log(diameterOfBinaryTree(t7)); // 1