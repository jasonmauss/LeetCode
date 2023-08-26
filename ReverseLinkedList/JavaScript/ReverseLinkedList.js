// Solution for: https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 */
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
const reverseList = (head) => {
    let previousNode = null;
    while (head) {
        previousNode = new ListNode(head.val, previousNode);
        head = head.next;
    }
    return previousNode;
};
const rootNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
// some test cases
console.log(reverseList(rootNode)); // [5,4,3,2,1]
const rootNode2 = new ListNode(1, new ListNode(2, null));
console.log(reverseList(rootNode2)); // [2, 1]
