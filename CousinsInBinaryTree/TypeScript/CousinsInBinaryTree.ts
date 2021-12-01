// Solution for: https://leetcode.com/problems/cousins-in-binary-tree/

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

 const isCousins = (root: TreeNode | null, x: number, y: number): boolean => {

    const tree = [root];

    while (tree.length) {
        
        const length:number = tree.length;
        let foundX:boolean = false;
        let foundY:boolean = false;

        // check the first level
        for (let i:number = 0; i < length; i++) {
        
            const curNode = tree.shift();
            // check if the two nodes children are x and y
            // if they are, they're not cousins so return false
            if (curNode.left && curNode.right) {
                if ((curNode.left.val === x && curNode.right.val === y) ||
                    (curNode.left.val === y && curNode.right.val === x))
                    return false;
            }

            // find x and y at the same level
            if (curNode.val === x) foundX = true;
            if (curNode.val === y) foundY = true;
            if (curNode.left) tree.push(curNode.left);
            if (curNode.right) tree.push(curNode.right);
        }
        
        if (foundX && foundY) return true;
    }

    return false;
};

// some test cases
let t1:TreeNode = new TreeNode(4, null, null);
let t2:TreeNode = new TreeNode(3, null, null);
let t3:TreeNode = new TreeNode(2, t1, null);
let t4:TreeNode = new TreeNode(1, t3, t2);

console.log(isCousins(t4, 4, 3)); // false

let t5:TreeNode = new TreeNode(4, null, null);
let t6:TreeNode = new TreeNode(5, null, null);
let t7:TreeNode = new TreeNode(2, null, t5);
let t8:TreeNode = new TreeNode(3, null, t6);
let t9:TreeNode = new TreeNode(1, t7, t8);

console.log(isCousins(t9, 5, 4)); // true

let t10:TreeNode = new TreeNode(4, null, null);
let t11:TreeNode = new TreeNode(2, null, t10);
let t12:TreeNode = new TreeNode(3, null, null);
let t13:TreeNode = new TreeNode(1, t11, t12);

console.log(isCousins(t13, 2, 3)); // false