// Solution for: https://leetcode.com/problems/rotate-list/
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
function rotateRight(head, k) {
    return null;
}
;
// some test cases
const headNode1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
console.log(rotateRight(headNode1, 2));
const headNode2 = new ListNode(0, new ListNode(1, new ListNode(2)));
console.log(rotateRight(headNode2, 4));
