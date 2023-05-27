// Solution for: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
/**
 * Definition for node.
 */
class LeetNode {
    val: number
    children: LeetNode[]
    constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
        this.children = []
    }
}

function postorder(root: LeetNode | null): number[] {

    if(!root) return [];
    return [].concat(...root.children.map(postorder), root.val);

};


// some test cases

// Test 1
let Test1RootNode1:LeetNode = new LeetNode(1)
let Test1LeafNode5:LeetNode = new LeetNode(5);
let Test1LeafNode6:LeetNode = new LeetNode(6);
let Test1ChildNode3:LeetNode = new LeetNode(3);
let Test1ChildNode2:LeetNode = new LeetNode(2);
let Test1ChildNode4:LeetNode = new LeetNode(4);
Test1ChildNode3.children = [Test1LeafNode5, Test1LeafNode6];
Test1RootNode1.children = [Test1ChildNode3, Test1ChildNode2, Test1ChildNode4];

console.log(postorder(Test1RootNode1)); // [5,6,3,2,4,1]

// Test 2
let Test2RootNode1:LeetNode = new LeetNode(1)

// leaf nodes
let Test2LeafNode2:LeetNode = new LeetNode(2);
let Test2LeafNode6:LeetNode = new LeetNode(6);
let Test2LeafNode10:LeetNode = new LeetNode(10);
let Test2LeafNode12:LeetNode = new LeetNode(12);
let Test2LeafNode13:LeetNode = new LeetNode(13);
let Test2LeafNode14:LeetNode = new LeetNode(14);


// child non-leaf nodes
let Test2ChildNode3:LeetNode = new LeetNode(3);
let Test2ChildNode4:LeetNode = new LeetNode(4);
let Test2ChildNode5:LeetNode = new LeetNode(5);
let Test2ChildNode7:LeetNode = new LeetNode(7);
let Test2ChildNode8:LeetNode = new LeetNode(8);
let Test2ChildNode9:LeetNode = new LeetNode(9);
let Test2ChildNode11:LeetNode = new LeetNode(11);

// setup parent/child relationships
Test2ChildNode11.children = [Test2LeafNode14];
Test2ChildNode9.children = [Test2LeafNode13];
Test2ChildNode8.children = [Test2LeafNode12];
Test2ChildNode7.children = [Test2ChildNode11];
Test2ChildNode5.children = [Test2ChildNode9, Test2LeafNode10];
Test2ChildNode4.children = [Test2ChildNode8];
Test2ChildNode3.children = [Test2LeafNode6, Test2ChildNode7];
Test2RootNode1.children = [Test2LeafNode2, Test2ChildNode3, Test2ChildNode4, Test2ChildNode5];

console.log(postorder(Test2RootNode1)); // [2,6,14,11,7,3,12,8,4,13,9,10,5,1]