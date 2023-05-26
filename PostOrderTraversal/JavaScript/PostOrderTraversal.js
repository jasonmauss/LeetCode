// Solution for: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
/**
 * Definition for node.
 */
class LeetNode {
    val;
    children;
    constructor(val) {
        this.val = (val === undefined ? 0 : val);
        this.children = [];
    }
}
function postorder(root) {
    return [0];
}
;
// some test cases
// Test 1
let Test1RootNode1 = new LeetNode(1);
let Test1LeafNode1 = new LeetNode(5);
let Test1LeafNode2 = new LeetNode(6);
let Test1ChildNode1 = new LeetNode(3);
let Test1ChildNode2 = new LeetNode(2);
let Test1ChildNode3 = new LeetNode(4);
Test1ChildNode1.children = [Test1LeafNode1, Test1LeafNode2];
console.log(postorder(Test1RootNode1)); // [5,6,3,2,4,1]
// Test 2
let Test2RootNode1 = new LeetNode(1);
// leaf nodes
let Test2LeafNode2 = new LeetNode(2);
let Test2LeafNode6 = new LeetNode(6);
let Test2LeafNode10 = new LeetNode(10);
let Test2LeafNode12 = new LeetNode(12);
let Test2LeafNode13 = new LeetNode(13);
let Test2LeafNode14 = new LeetNode(14);
// child non-leaf nodes
let Test2ChildNode3 = new LeetNode(3);
let Test2ChildNode4 = new LeetNode(4);
let Test2ChildNode5 = new LeetNode(5);
let Test2ChildNode7 = new LeetNode(7);
let Test2ChildNode8 = new LeetNode(8);
let Test2ChildNode9 = new LeetNode(9);
let Test2ChildNode11 = new LeetNode(11);
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
