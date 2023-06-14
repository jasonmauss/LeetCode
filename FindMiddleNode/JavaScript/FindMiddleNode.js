// Solution for: https://leetcode.com/problems/middle-of-the-linked-list/
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
const middleNode = (head) => {
    if (!head.next)
        return head;
    let oneNode = head;
    let twoNode = head.next;
    while (twoNode) {
        oneNode = oneNode.next;
        twoNode = twoNode.next?.next;
    }
    return oneNode;
};
// some test cases
let rootNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
console.log(middleNode(rootNode)); // [3,4,5]
let rootNode2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));
console.log(middleNode(rootNode2)); // [4,5,6]
